import React, { useState } from 'react';
import { useEcosystem } from '../contexts/EcosystemContext';
import { cloudService } from '../services/cloudService';
import { Play, Save } from 'lucide-react';

export const Lab = () => {
  const { user } = useEcosystem();
  const [code, setCode] = useState('print("Hola Mundo desde el Laboratorio")');
  const [output, setOutput] = useState('');

  const execute = () => {
    // NOTA DE SEGURIDAD: Aquí el frontend enviaría el código a una Edge Function/Piston API en la nube
    // Por ser un frontend puro en React sin sandbox integrado, simulamos la respuesta.
    setOutput("Hola Mundo desde el Laboratorio\n\n[Nota: Para ejecución real conecte la API de Piston o Pyodide]");
  };

  const save = async () => {
    await cloudService.saveLabExperiment(user.id, 'python', code);
    alert('Experimento Guardado en Supabase!');
  };

  return (
    <div className="fade-in">
      <h2>🧪 Laboratorio de Pruebas</h2>
      <p style={{color:'#64748b'}}>Escribe y ejecuta código libremente. Un entorno sandbox seguro.</p>
      
      <div className="card mt-4" style={{padding: 0, overflow:'hidden'}}>
        <div style={{background:'#1e293b', padding:'10px', color:'white', display:'flex', justifyContent:'space-between'}}>
          <span>Python 3.10</span>
          <div>
            <button className="icon-btn" style={{color:'white'}} onClick={save}><Save size={18}/></button>
          </div>
        </div>
        <textarea 
          value={code} onChange={e=>setCode(e.target.value)}
          style={{width:'100%', minHeight:'200px', background:'#0f172a', color:'#38bdf8', padding:'1rem', border:'none', fontFamily:'monospace', resize:'vertical'}}
        />
      </div>

      <button className="btn btn-primary mt-4" style={{display:'flex', gap:'10px'}} onClick={execute}>
        <Play size={18}/> Ejecutar Código
      </button>

      {output && (
        <div className="mt-4 card" style={{background:'#f1f5f9'}}>
          <strong>SALIDA:</strong>
          <pre style={{color:'black', background:'none', padding:0, marginTop:'10px'}}>{output}</pre>
        </div>
      )}
    </div>
  );
};