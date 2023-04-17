import React from 'react';
import { ThemeSwitchWrapper, ToggleText, ThemeSwitch, ThemeInput, RoundSlider } from './toggle-theme.styles';
import { FaSun, FaMoon } from 'react-icons/fa';

const Toggle = ({ onToggle, isDarkMode }) => {
  return (
    <ThemeSwitchWrapper>
      <ToggleText>
        <span>{isDarkMode ? <FaMoon /> : <FaSun />}</span>
      </ToggleText>
      <ThemeSwitch>
        <ThemeInput
          type="checkbox"
          checked={isDarkMode}
          onChange={onToggle}
        />
        <RoundSlider isChecked={isDarkMode} />
      </ThemeSwitch>
    </ThemeSwitchWrapper>
  );
};

export default Toggle;
