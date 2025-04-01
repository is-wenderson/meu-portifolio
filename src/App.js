// src/App.js
import React, { useState } from 'react';
import Header from "./components/Header";
import Perfil from './components/Perfil';
import Formacao from './components/Formacao';
import Portfolio from './components/Portifolio';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('perfil');

  const renderSection = () => {
    switch (activeSection) {
      case 'perfil':
        return <Perfil />;
      case 'formacao':
        return <Formacao />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Perfil />;
    }
  };

  return (
    <div className="app-container">
      {/* Passa a função setActiveSection para o Header */}
      <Header setActiveSection={setActiveSection} />

      {/* Conteúdo dinâmico */}
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
