import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styles';

const Menu = ({ open, setOpen }) => {
  const handleClick = () => setOpen(!open);

  useEffect(() => {
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    const navAnimation = (direction1, direction2) => {
      navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
      });
    };

    if (open) {
      navAnimation('out', 'in');
    } else {
      navAnimation('in', 'out');
    }
  }, [open]);

  return (
    <StyledMenu open={open}>
      <nav>
        <ul>
          <li className="nav-item slide-out-1">
            <Link to='/' onClick={handleClick} className="nav-link">
              <span role="img" aria-label="home">	&#x1F3E0;</span>
                Home
            </Link>
          </li>
          <li className="nav-item slide-out-2">
            <Link to='/resume' onClick={handleClick} className="nav-link">
              <span role="img" aria-label="resume">	&#x1F4C4;</span>
              Resume
            </Link>  
          </li>
          
          <li className="nav-item slide-out-3">
            <Link to='/projects' onClick={handleClick} className="nav-link">
              <span role="img" aria-label="projects">&#x1F4BB;</span>
              Projects
            </Link>
          </li>
          <li className="nav-item slide-out-4">
            <Link to='/about' onClick={handleClick} className="nav-link">
              <span role="img" aria-label="about-me">&#x1F44B;</span>
              About
          </Link>
          </li>
          <li className="nav-item slide-out-5">
            <Link to='/contact' onClick={handleClick} className="nav-link">
              <span role="img" aria-label="contact">&#x1f4e9;</span>
                Contact
              </Link>
          </li>
        </ul>
      </nav>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
