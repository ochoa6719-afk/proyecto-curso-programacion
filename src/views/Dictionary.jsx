import React, { useState } from 'react';
import { courseData } from '../data/courseData';
import { Search } from 'lucide-react';

export const Dictionary = () => {
  const [search, setSearch] = useState('');

  const filtered = courseData.dictionary.filter(d => 
    d.term.toLowerCase().includes(search.toLowerCase()) || d.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <h2>📚 Diccionario</h2>
      <div className="card mt-4" style={{display:'flex', alignItems:'center', gap:'10px', padding:'0.5rem 1rem'}}>
        <Search size={20} color="#64748b"/>
        <input style={{border:'none', margin:0, padding:'0.5rem'}} placeholder="Buscar concepto (ej. Algoritmo)..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>

      <div className="mt-4" style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
        {filtered.map(item => (
          <div key={item.id} className="card" style={{marginBottom:0}}>
            <h3 style={{color:'#10b981'}}>{item.term}</h3>
            <p className="mt-4">{item.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
};