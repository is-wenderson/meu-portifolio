// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header({ setActiveSection }) {
  return (
    <motion.header 
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 0.8 }}
      
      whileTap={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
      
    >
      <h1 className="header-title">Meu Portfólio</h1>
      
      <nav className="nav-menu">
        <button onClick={() => setActiveSection('perfil')}>Perfil</button>
        <button onClick={() => setActiveSection('formacao')}>Formação</button>
        <button onClick={() => setActiveSection('portfolio')}>Portfólio</button>
      </nav>
    </motion.header>
  );
}

