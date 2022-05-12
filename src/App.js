//importando os componentes criados
import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';


export default function App() {
  return (
    <div>
      
        { /* renderizando o componente Header */}
        <p><Header /></p>
        { /* renderizando o componente Main */}
        <p><Main /></p>
      
    </div>
  );
}