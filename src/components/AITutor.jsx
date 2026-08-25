import React, { useState } from 'react';
import { useEcosystem } from '../contexts/EcosystemContext';
import { cloudService } from '../services/cloudService';
import { MessageCircle, X, Send } from 'lucide-react';

export const AITutor = () => {
  const { user, currentContext } = useEcosystem();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const ask = async (e) => {
    e.preventDefault();
    if(!query) return;
    const newChat = [...chat, { role: 'user', text: query }];
    setChat(newChat);
    setQuery('');
    setLoading(true);

    const reply = await cloudService.askTutor(user.id, query, currentContext);
    setChat([...newChat, { role: 'ai', text: reply }]);
    setLoading(false);
  };

  if(!user) return null;

  return (
    <>
      <button className="tutor-fab" onClick={() => setOpen(!open)}>
        <MessageCircle size={24} />
      </button>
      
      {open && (
        <div className="tutor-panel card">
          <div className="tutor-header">
            <h4>🤖 Tutor IA</h4>
            <button onClick={() => setOpen(false)} style={{background:'none', border:'none', cursor:'pointer'}}><X size={18}/></button>
          </div>
          <div className="tutor-body">
            {chat.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}`}>{msg.text}</div>
            ))}
            {loading && <div className="chat-bubble ai">Pensando...</div>}
          </div>
          <form className="tutor-input" onSubmit={ask}>
            <input placeholder="Ej. ¿Qué es un bucle for?" value={query} onChange={e=>setQuery(e.target.value)} />
            <button type="submit" className="btn btn-primary" style={{padding:'0.5rem'}}><Send size={16}/></button>
          </form>
        </div>
      )}
    </>
  );
};