import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { cloudService } from '../services/cloudService';

// Unificamos Auth, Progreso y Analíticas en este super-contexto
export const EcosystemContext = createContext({});

export const EcosystemProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]); // Array de IDs con problemas
  const [currentContext, setCurrentContext] = useState({ stage: 'General', topic: 'General' }); // Contexto para IA

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      cloudService.fetchProgress(user.id).then(setTasks);
      calculateWeaknesses();
    }
  }, [user]);

  const toggleTask = async (taskId) => {
    const isDone = tasks.includes(taskId);
    setTasks(p => isDone ? p.filter(id => id !== taskId) : [...p, taskId]);
    await cloudService.toggleTask(user.id, taskId, isDone);
  };

  const calculateWeaknesses = async () => {
    if(!user) return;
    const { hints, feedback } = await cloudService.fetchAnalytics(user.id);
    
    // Lógica simple: Si un content_id tiene status 'bad' ('No entendí'), o muchas pistas, es debilidad.
    let weakNodes = new Set();
    feedback.forEach(f => { if(f.status === 'bad') weakNodes.add(f.content_id) });
    // Si usó pistas, también lo ponemos de alerta
    hints.forEach(h => weakNodes.add(h.exercise_id));
    
    setWeaknesses(Array.from(weakNodes));
  };

  const submitFeedback = async (contentId, status) => {
    await cloudService.logFeedback(user.id, contentId, status);
    calculateWeaknesses();
  };

  const logHintUsage = async (exerciseId, level) => {
    await cloudService.logHint(user.id, exerciseId, level);
    calculateWeaknesses();
  };

  return (
    <EcosystemContext.Provider value={{ 
      user, loading, tasks, toggleTask, weaknesses, submitFeedback, logHintUsage,
      currentContext, setCurrentContext 
    }}>
      {!loading && children}
    </EcosystemContext.Provider>
  );
};
export const useEcosystem = () => useContext(EcosystemContext);