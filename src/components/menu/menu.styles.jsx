import styled from 'styled-components';

export const StyledMenu = styled.nav`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: all 0.8s ease-in-out;

  nav,
  nav ul {
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
  }

  nav ul li {
    height: 20%;
    overflow: hidden;
  }

  a {
    position: relative;
    top: 45%;
    font-size: 1.75rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    display: block;
    text-align: center;
    transition: color 0.3s linear, transform 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryLight};
      transform: scale(1.2);
    }

    &::before {
      content: "";
      width: 25vw;
      height: 3px;
      background-color: ${({ theme }) => theme.primaryLight};
      position: absolute;
      top: 47.5%;
      left: 0;
      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    a {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  /* Replace the navColor variables with your actual color values */
  li:nth-of-type(1) {
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.navColor1};
  }

  li:nth-of-type(2) {
    background-color: ${({ theme }) => theme.navColor2};
  }

  li:nth-of-type(3) {
    background-color: ${({ theme }) => theme.navColor3};
  }

  li:nth-of-type(4) {
    background-color: ${({ theme }) => theme.navColor4};
  }

  li:nth-of-type(5) {
    background-color: ${({ theme }) => theme.navColor5};
  }

  .nav-item {
  opacity: 0;
}

.slide-in-1 {
  animation: slide-in 0.4s linear 0.2s both;
}

.slide-in-2 {
  animation: slide-in 0.4s linear 0.4s both;
}

.slide-in-3 {
  animation: slide-in 0.4s linear 0.6s both;
}

.slide-in-4 {
  animation: slide-in 0.4s linear 0.8s both;
}

.slide-in-5 {
  animation: slide-in 0.4s linear 1s both;
}

.slide-out-1 {
  animation: slide-out 0.3s linear 0.5s both;
}

.slide-out-2 {
  animation: slide-out 0.3s linear 0.4s both;
}

.slide-out-3 {
  animation: slide-out 0.3s linear 0.3s both;
}

.slide-out-4 {
  animation: slide-out 0.3s linear 0.2s both;
}

.slide-out-5 {
  animation: slide-out 0.3s linear 0.1s both;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

`;
