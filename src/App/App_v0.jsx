/*PRIMERA VERSIÓN SIN ESTILOS NI ESTADOS*/
import React from 'react';

const deseos = [
    { texto: 'ir a la luna', cumplido: false },
    { texto: 'aprobar este módulo', cumplido: false },
    { texto: 'pagar el gimnasio', cumplido: true },
    { texto: 'aprender React', cumplido: false },
    
]

const App = () => 
  <div>
    <h1>My wish list APP </h1>
    <fieldset>
        <legend>New wish: </legend>
        <input placeholder='Enter your wish here' />
    </fieldset>
    <ul>
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
            <li key={texto}>
                <input id={`deseo${i}`} type="checkbox" checked={cumplido} />
                <label htmlFor={`deseo${i}`}>{texto}</label>
            </li>
        ))}
    </ul>
    {/* botón */}
    <button type="button">Archivar deseos cumplidos</button>
</div>;

export default App;