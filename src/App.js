import PokeAPI from "./PokeAPI";
import "./App.css";
import { AppBar } from "@material-ui/core";
import ButtonAppBar from "./Appbar";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>

        <Paper style={{ height: "100%" }}>
          <ButtonAppBar check={darkMode} change={() =>
            setDarkMode(!darkMode)} />
          <PokeAPI />
        </Paper>

      </ThemeProvider></>

  );
}

export default App;
