import styled from "styled-components";

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 8;
  position: absolute;
  top: 3%;
  right: 2rem;

    @media (max-width: 768px) {
    right: 1.5rem;
    top: 3.5%;
    }
`;

export const ToggleText = styled.span`
  font-size: 2rem;
  position: relative;
  top: 2px;
  right: 5px;
  color: ${({ theme }) => theme.primaryDark};

    @media (max-width: 768px) {
    
    font-size: 1.5rem;
    }
`;

export const ThemeSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;

  @media (max-width: 768px) {
    height: 28px;
    width: 50px;
    }
`;

export const ThemeInput = styled.input`
  display: none;
`;

export const Slider = styled.div`
  background: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  

  &::before {
    background: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;

    @media (max-width: 768px) {
        height: 22px;
        width: 22px;
    }
  }

  

  ${({ isChecked, theme }) =>
    isChecked &&
    `
    background: ${theme.primaryDark};

    &::before {
      transform: translateX(26px);

        @media (max-width: 768px) {
            transform: translateX(22px);
    }
  `}
`;

export const RoundSlider = styled(Slider)`
  border-radius: 34px;

  &::before {
    border-radius: 50%;
  }
`;
