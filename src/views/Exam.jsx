import React, { useState } from 'react';
import { useEcosystem } from '../contexts/EcosystemContext';
import { cloudService } from '../services/cloudService';

export const Exam = ({ stage, navigate }) => {
  const { user } = useEcosystem();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const exam = stage.exam;

  const handleAnswer = async (index) => {
    let finalScore = score;
    if (index === exam.questions[currentQ].ans) {
      finalScore += 1;
      setScore(finalScore);
    }
    
    if (currentQ < exam.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
      const passed = (finalScore / exam.questions.length) >= 0.8;
      await cloudService.saveExamResult(user.id, stage.id, finalScore, passed);
    }
  };

  if (finished) {
    const percent = (score / exam.questions.length) * 100;
    return (
      <div className="card text-center fade-in">
        <h2>Resultados del Examen</h2>
        <h1 style={{fontSize:'3rem', color: percent >= 80 ? '#10b981' : '#ef4444'}}>{percent}%</h1>
        <p>{percent >= 80 ? '🎉 ¡APROBADO!' : '❌ Necesitas reforzar conceptos.'}</p>
        <button className="btn btn-primary mt-4" onClick={() => navigate('roadmap')}>Volver al Mapa</button>
      </div>
    );
  }

  const q = exam.questions[currentQ];

  return (
    <div className="card fade-in">
      <p style={{color:'#64748b'}}>Pregunta {currentQ + 1} de {exam.questions.length}</p>
      <h3 className="mt-4">{q.q}</h3>
      <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'2rem'}}>
        {q.options.map((opt, i) => (
          <button key={i} className="btn btn-outline" onClick={() => handleAnswer(i)} style={{textAlign:'left'}}>{opt}</button>
        ))}
      </div>
    </div>
  );
};