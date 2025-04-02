// src/components/Perfil.js
import React from 'react';
import fotoPerfil from "../views/foto_perfil.jpeg";

function Perfil() {
  return (
    <div className="section-perfil">
      <div className="section-description">
        <h2>Perfil</h2>
        <p>Olá! Sou <strong>Wenderson Cunha</strong>, um entusiasta da <strong>tecnologia</strong> e apaixonado por inovação.</p> 
        <p>Minha trajetória profissional é marcada por experiências diversas na área de Tecnologia da Informação. Meu propósito é desenvolver soluções tecnológicas inovadoras que impulsionem a eficiência e o crescimento dos negócios.</p> 
        <p>Encaro desafios como oportunidades de aprendizado e acredito no poder da colaboração para criar soluções impactantes. 🚀</p> 
        <p>Fora do trabalho, gosto de aproveitar momentos com amigos e família, jogar e explorar novas formas de aprendizado contínuo!</p>
      </div>
      <div className="section-imagem">
        <img src={fotoPerfil} alt="Imagem de Perfil" />
      </div>
    </div>
    
  );
}

export default Perfil;
