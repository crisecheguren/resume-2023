import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { lightTheme, darkTheme } from './theme';
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Resume from './routes/resume/resume.component';
import Projects from './routes/projects/projects.compnent';
import AboutMe from './routes/about-me/about-me.component';
import Contact from './routes/contact/contact.component';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    document.dispatchEvent(new MouseEvent('mousedown'));
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>}>
          <Route index element={<Home onClick={handleClick} />} />
          <Route path="resume" element={<Resume onClick={handleClick} />} />
          <Route path="projects" element={<Projects onClick={handleClick} />} />
          <Route path="about" element={<AboutMe onClick={handleClick} />} />
          <Route path="contact" element={<Contact onClick={handleClick} />} />
        </Route>
      </Routes>
    </>
  </ThemeProvider>
  );
}

export default App;
