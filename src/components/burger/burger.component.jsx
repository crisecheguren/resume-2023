import React from 'react';
import { StyledBurger } from './burger.styles';

const Burger = ({ open, setOpen }) => {
  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <StyledBurger open={open} onClick={toggleNav}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};


export default Burger;