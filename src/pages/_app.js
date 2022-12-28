import { createGlobalStyle, ThemeProvider } from "styled-components";
import Footer from "../components/Footer";

import React, { useState } from "react";
import { Header } from "../components/Header";

import ColorModeProvider, { ColorModeContext } from "../context/ColorMode";
//
//
//  GLOBAL AND THEME - STYLED COMPONENTS DECLARATION
//
//

const GlobalCSS = createGlobalStyle` 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
const themes = {
  light: {
    textColor: "#111",
    backgroundColor: "#d0d0d0",
    boxColor: "linear-gradient(90deg, #fff, #ccc, #700ccc)",
    backgroundOpacity: "1",
    switcher: "linear-gradient(40deg, #ff0080, #ff8c00 70%)",
    navText: "#fff",
    moveSwitcher: "0",
  },

  dark: {
    textColor: "#ddd",
    backgroundColor: "#101010",
    boxColor: "linear-gradient(90deg, #202020, #555, #555, #202020)",
    backgroundOpacity: ".15",
    switcher: "#303136",
    navText: "#fff",
    moveSwitcher: "1.2rem",
  },
};

//ThemeProvider -- prove o tema para toda a aplicação
//ColorModeProvider -- prove o state do darkmode para todos components

//
// COVER ALL COMPONENTS AND PASS A CONTEXT
//

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

//
//  FUNCTION MYAPP - COMPONENTS THAT APPEARS ON SCREEN
//

function MyApp({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);
  // console.log(contexto);

  return (
    <ThemeProvider theme={themes[contexto.mode]}>
      <GlobalCSS />
      <Header />
      <Component {...pageProps} /> {/* EACH PAGE IS LIKE A PARENT COMPONENT THAT APPEND CHILDRENS COMPONENTS, AND MY APP RECEIVE AS PARAMETER COMPONENT (PARENT COMPONENT) AND YOUR PROPS (CHILDRENS COMPONENTS) -- IF YOU REMOVE PAGEPROPS AS PARAMETER, MYAPP FUNCTION STILL WORKS*/}
      <Footer />
    </ThemeProvider>
  );
}

//
// FUNCTION _APP - APPEND MYAPP AS CHILDREN OF COLORMODE
//

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
