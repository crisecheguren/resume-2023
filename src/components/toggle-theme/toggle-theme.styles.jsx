import styled from "styled-components";

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 9;
  position: fixed;
  right: 25px;
  top: 30px;
`;

export const ToggleText = styled.span`
  margin-right: 10px;
  font-size: 2rem;
  position: relative;
  top: 2px;
  right: 5px;
  color: ${({ theme }) => theme.primaryDark};
`;

export const ThemeSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
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
  }

  ${({ isChecked, theme }) =>
    isChecked &&
    `
    background: ${theme.primaryDark};

    &::before {
      transform: translateX(26px);
    }
  `}
`;

export const RoundSlider = styled(Slider)`
  border-radius: 34px;

  &::before {
    border-radius: 50%;
  }
`;
