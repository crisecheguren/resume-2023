import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { StyledSpan } from './typed.styles'

function TypedComponent({ strings, idName, loop, cursor }) {

    const options = {
    strings: strings,
    typeSpeed: 75,
    backSpeed: 50,
    loop: loop,
    showCursor: cursor,
    cursorChar: '|',
  };

  useEffect(() => {
    const typed = new Typed("#" + idName, options);
    return () => {
      typed.destroy();
    };
  }, );

  return <StyledSpan id={idName} />;
}

export default TypedComponent;