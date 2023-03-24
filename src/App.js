import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { theme } from './theme';
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Resume from './routes/resume/resume.component';
import Projects from './routes/projects/projects.compnent';
import Contact from './routes/contact/contact.component';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  </ThemeProvider>
  );
}

export default App;
