import React, { useState } from 'react';
import { useEcosystem } from '../contexts/EcosystemContext';

export const HintSystem = ({ exercise }) => {
  const { logHintUsage } = useEcosystem();
  const [hintIndex, setHintIndex] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);

  const nextHint = () => {
    const newIndex = hintIndex + 1;
    setHintIndex(newIndex);
    logHintUsage(exercise.id, newIndex + 1);
  };

  return (
    <div className="hint-box">
      {hintIndex >= 0 && (
        <div className="hints-shown">
          {exercise.hints.slice(0, hintIndex + 1).map((h, i) => (
            <p key={i}>💡 <strong>Pista {i+1}:</strong> {h}</p>
          ))}
        </div>
      )}
      <div style={{marginTop: '1rem', display: 'flex', gap: '10px'}}>
        {hintIndex < (exercise.hints?.length - 1) && (
          <button className="btn btn-outline" onClick={nextHint}>Solicitar Pista</button>
        )}
        {(hintIndex >= (exercise.hints?.length - 1) || hintIndex >= 0) && !showSolution && (
          <button className="btn btn-danger" onClick={() => setShowSolution(true)}>Ver Solución</button>
        )}
      </div>
      {showSolution && (
        <div className="solution-box mt-4">
          <strong>Solución:</strong>
          <pre>{exercise.solution}</pre>
        </div>
      )}
    </div>
  );
};