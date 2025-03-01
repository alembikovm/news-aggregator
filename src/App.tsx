import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";

import { theme } from "./theme";
import { AppWrapper, GlobalStyle } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
