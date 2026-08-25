import React, { useState } from 'react';
import { supabase } from './lib/supabase';
import { EcosystemProvider, useEcosystem } from './contexts/EcosystemContext';
import { AITutor } from './components/AITutor';
import { Dashboard } from './views/Dashboard';
import { Study } from './views/Study';
import { Exam } from './views/Exam';
import { Lab } from './views/Lab';
import { Dictionary } from './views/Dictionary';
import { courseData } from './data/courseData';
import { Menu, Home, Map, BookOpen, Beaker, X, LogOut } from 'lucide-react';
import './styles/app.css';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(''); // Nuevo estado para errores

  const handleAuth = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Limpiar errores previos
    
    let result;
    if (isLogin) {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    if (result.error) {
      setErrorMsg(result.error.message); // Mostrar el error al usuario
    }
  };

  return (
    <div className="auth-container">
      <form className="card auth-card" onSubmit={handleAuth}>
        <h2>{isLogin ? 'Ingresar' : 'Registro'}</h2>
        
        {/* Mostrar mensaje de error si existe */}
        {errorMsg && (
          <div style={{ color: '#ef4444', background: '#fee2e2', padding: '0.5rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {errorMsg}
          </div>
        )}
        
        <input type="email" placeholder="Correo electrónico" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña (mín 6 carácteres)" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn btn-primary" style={{width: '100%'}}>{isLogin ? 'Entrar' : 'Registrarse'}</button>
        <p className="auth-toggle" onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); }}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : 'Ya tengo cuenta'}
        </p>
      </form>
    </div>
  );
};

const MainLayout = () => {
  const [view, setView] = useState('dashboard');
  const [activeStage, setActiveStage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (v, params = null) => {
    if(params?.stage) setActiveStage(params.stage);
    setView(v);
    setMenuOpen(false);
  };

  return (
    <div className="app-layout">
      <header className="mobile-header">
        <button className="icon-btn" onClick={() => setMenuOpen(true)}><Menu/></button>
        <strong>Ruta Programación</strong>
        <span></span>
      </header>

      {/* SIDEBAR RESPONSIVE */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header"><h2>Ecosistema</h2><button className="mobile-close-btn" onClick={() => setMenuOpen(false)}><X/></button></div>
        <nav className="sidebar-nav">
          <button className="nav-btn" onClick={() => navigate('dashboard')}><Home size={18}/> Dashboard</button>
          <button className="nav-btn" onClick={() => navigate('roadmap')}><Map size={18}/> Roadmap / Árbol</button>
          <button className="nav-btn" onClick={() => navigate('lab')}><Beaker size={18}/> Laboratorio</button>
          <button className="nav-btn" onClick={() => navigate('dictionary')}><BookOpen size={18}/> Diccionario</button>
          <button className="nav-btn btn-danger" onClick={() => supabase.auth.signOut()}><LogOut size={18}/> Salir</button>
        </nav>
      </aside>
      <div className={`sidebar-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>

      <main className="main-content">
        <div className="content-wrapper">
          {view === 'dashboard' && <Dashboard navigate={navigate} />}
          
          {view === 'roadmap' && (
            <div className="fade-in">
              <h2>🌳 Árbol de Habilidades</h2>
              <div className="roadmap-grid">
                {courseData.stages.map(stage => (
                  <div key={stage.id} className="card roadmap-card" onClick={() => navigate('study', {stage})}>
                    <h3>{stage.title}</h3>
                    <p style={{marginTop:'10px'}}>{stage.objective}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === 'study' && activeStage && <Study stage={activeStage} navigate={navigate} />}
          {view === 'exam' && activeStage && <Exam stage={activeStage} navigate={navigate} />}
          {view === 'lab' && <Lab />}
          {view === 'dictionary' && <Dictionary />}
        </div>
      </main>

      {/* TUTOR IA INTEGRADO */}
      <AITutor />
    </div>
  );
};

export default function App() {
  return (
    <EcosystemProvider>
      <AuthConsumer />
    </EcosystemProvider>
  );
}

const AuthConsumer = () => {
  const { user, loading } = useEcosystem();
  if (loading) return <div style={{padding:'2rem'}}>Cargando Ecosistema...</div>;
  if (!user) return <AuthScreen />;
  return <MainLayout />;
};