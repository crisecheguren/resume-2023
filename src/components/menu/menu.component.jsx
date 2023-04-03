import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styles';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
        <Link to='/' onClick={() => setOpen(!open)}>
            <span role="img" aria-label="home">	&#x1F3E0;</span>
            Home
        </Link>
    
        <Link to='/resume' onClick={() => setOpen(!open)}>
            <span role="img" aria-label="resume">	&#x1F4C4;</span>
            Resume
        </Link>
      <Link to='/projects' onClick={() => setOpen(!open)}>
        <span role="img" aria-label="projects">&#x1F4BB;</span>
        Projects
        </Link>
      <Link to='/about' onClick={() => setOpen(!open)}>
        <span role="img" aria-label="about-me">&#x1F44B;</span>
        About Me
        </Link>
      <Link to='/contact' onClick={() => setOpen(!open)}>
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;