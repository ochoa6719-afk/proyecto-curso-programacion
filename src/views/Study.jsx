import React, { useEffect } from 'react';
import { useEcosystem } from '../contexts/EcosystemContext';
import { HintSystem } from '../components/HintSystem';
import { CheckCircle, Circle, ThumbsUp, ThumbsDown, Meh } from 'lucide-react';

export const Study = ({ stage, navigate }) => {
  const { tasks, toggleTask, submitFeedback, setCurrentContext } = useEcosystem();

  useEffect(() => {
    setCurrentContext({ stage: stage.title, topic: 'Teoría general' });
  }, [stage]);

  return (
    <div className="fade-in study-view">
      <button className="btn btn-outline" onClick={() => navigate('roadmap')}>← Mapa</button>
      <h2 className="study-title">Etapa {stage.num}: {stage.title}</h2>
      
      <div className="card">
        <h3>📖 Teoría Básica</h3>
        <p className="mt-4">{stage.theory}</p>
        <div className="code-container mt-4"><pre>{stage.code}</pre></div>
      </div>

      <div className="card">
        <h3>✅ Ejercicios Progresivos</h3>
        <div className="task-list">
          {stage.exercises.map(ex => (
            <div key={ex.id} className="exercise-card">
              <div className="task-item" onClick={() => toggleTask(ex.id)}>
                {tasks.includes(ex.id) ? <CheckCircle color="#10b981" /> : <Circle color="#94a3b8" />} <strong>{ex.level}:</strong> {ex.desc}
              </div>
              <HintSystem exercise={ex} />
            </div>
          ))}
        </div>
      </div>

      <div className="card feedback-box text-center">
        <h3>¿Entendiste este tema?</h3>
        <p style={{color:'#64748b'}}>Ayuda a la IA a personalizar tu aprendizaje.</p>
        <div style={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'1rem'}}>
          <button className="btn btn-outline" onClick={() => submitFeedback(stage.id, 'good')}><ThumbsUp/></button>
          <button className="btn btn-outline" onClick={() => submitFeedback(stage.id, 'neutral')}><Meh/></button>
          <button className="btn btn-outline" onClick={() => submitFeedback(stage.id, 'bad')}><ThumbsDown/></button>
        </div>
      </div>
      
      {stage.exam && (
        <button className="btn btn-primary" style={{width:'100%'}} onClick={() => navigate('exam')}>
          📝 Rendir Examen de la Etapa
        </button>
      )}
    </div>
  );
};