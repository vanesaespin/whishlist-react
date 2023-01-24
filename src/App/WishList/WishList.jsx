/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

function WishList({ deseos }) {
  return (
    <ul className="lista-deseos">
      {deseos.map(({ texto, cumplido }, i) => (
        <li
          key={texto}
          className={classNames(
            'lista-deseos__item',
            { 'lista-deseos__item--cumplido': cumplido },
          )}
        >
          <input id={`deseo${i}`} type="checkbox" checked={cumplido} />
          <label htmlFor={`deseo${i}`}>{texto}</label>
        </li>
      ))}
    </ul>
  );
}

WishList.propTypes = {
  // deseos: Proptypes.array, // esta es la forma más sencilla
  // --> esta la más estricta pero eslint te la pide
  deseos: Proptypes.arrayOf(Proptypes.shape({
    texto: Proptypes.string,
    cumplido: Proptypes.bool
  }))
};

WishList.defaultProps = {
  deseos: [], // por defecto array vacio
};
