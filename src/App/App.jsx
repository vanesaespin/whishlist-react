/* eslint-disable no-lone-blocks */
import React from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

{ /* SEPARAR LA LISTA DE DESEOS EN COMPONENTES DIFERENTES */ }

const deseos = [
  { texto: 'ir a la luna', cumplido: false },
  { texto: 'aprobar este módulo', cumplido: false },
  { texto: 'pagar el gimnasio', cumplido: true },
  { texto: 'aprender React', cumplido: false },

];

function App() {
  return (
    <div className="app">
      <h1>My wish list APP </h1>
      <WishInput />
      {/* botón */}
      <button type="button" className="deseos-clear">Archivar deseos cumplidos</button>
    </div>
  );
}

export default App;
