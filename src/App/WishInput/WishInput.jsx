import React from 'react';

function WishInput() {
  return (
    <fieldset className="deseo-input">
      <legend className="deseo-input__label">New wish: </legend>
      <input className="deseo-input__field" placeholder="Enter your wish here" />
    </fieldset>
  );
}

export default WishInput;
