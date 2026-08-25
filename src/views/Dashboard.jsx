import React from 'react';
import { useEcosystem } from '../contexts/EcosystemContext';
import { courseData } from '../data/courseData';

export const Dashboard = ({ navigate }) => {
  const { tasks, weaknesses } = useEcosystem();
  const total = courseData.stages.reduce((acc, stage) => acc + stage.checklist.length + stage.exercises.length + 1, 0);
  const percent = Math.round((tasks.length / total) * 100) || 0;

  return (
    <div className="fade-in">
      <h1>Hola 👋</h1>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Progreso General</h3>
          <div className="progress-bg mt-4"><div className="progress-fill" style={{ width: `${percent}%` }}></div></div>
          <p className="progress-text">{percent}% completado</p>
        </div>
        
        <div className="card">
          <h3>🏆 Logros Recientes</h3>
          <p>🐣 Primer paso</p>
          <p style={{color:'#64748b'}}>Continúa aprendiendo para desbloquear más.</p>
        </div>

        <div className="card">
          <h3>🧠 Necesita Refuerzo</h3>
          {weaknesses.length === 0 ? (
            <p style={{color:'#10b981', marginTop:'1rem'}}>¡Todo dominado por ahora!</p>
          ) : (
            <div className="weak-list mt-4">
              {weaknesses.map(w => <div key={w} className="badge-red">🔴 Tema: {w}</div>)}
              <p style={{fontSize:'0.8rem', marginTop:'1rem', color:'#64748b'}}>Basado en uso de pistas y feedback.</p>
            </div>
          )}
        </div>
      </div>
      <button className="btn btn-primary mt-4" onClick={() => navigate('roadmap')}>Continuar Curso</button>
    </div>
  );
};