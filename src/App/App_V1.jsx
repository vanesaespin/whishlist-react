{/*APP CON ESTILOS SENCILLOS Y SIN ESTADOS*/}
import { check } from 'prettier';
import React from 'react';
import './App.css';

const deseos = [
    { texto: 'ir a la luna', cumplido: false },
    { texto: 'aprobar este módulo', cumplido: false },
    { texto: 'pagar el gimnasio', cumplido: true },
    { texto: 'aprender React', cumplido: false },
    
]

const App = () => 
  <div className='app'>
    <h1>My wish list APP </h1>
    <fieldset className='deseo-input'>
        <legend className='deseo-input__label'>New wish: </legend>
        <input className='deseo-input__field' placeholder='Enter your wish here' />
    </fieldset>
    <ul className='lista-deseos'>
        {/* Versión inicial SIN destructuración. 
            Ponemos el key para que no de error el navegador 
            {deseos.map(({deseo}) => (<li key={deseo.texto}>{deseo.texto}</li>))}
        */}

        {/* Versión CON destructuracion y con checkbox añadido pero 
        sin asociación del label a su input (accesibilidad): */}
        {/*deseos.map(({ texto, cumplido }) => (
            <li key={texto}>
                <input type="checkbox" checked={cumplido}/>
                <label>{texto}</label>
            </li>
        ))*/}
        {/*Versión del anterior asociando etiqueta al input*/}
        {deseos.map(({ texto, cumplido }, i) => (
            <li key={texto} className={`lista-deseos__item ${cumplido ? 'lista-deseos__item--cumplido': ''}`}>
                <input id={`deseo${i}`} type="checkbox" checked={cumplido} />
                <label htmlFor={`deseo${i}`}>{texto}</label>
            </li>
        ))}
    </ul>
    {/* botón */}
    <button type="button" className='deseos-clear'>Archivar deseos cumplidos</button>
</div>;

export default App;