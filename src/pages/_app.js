import { createGlobalStyle, ThemeProvider, styled } from "styled-components";
import Footer from "../components/Footer";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { Header, StyledNav } from "../components/styles";
import { setCookie, parseCookies } from "nookies";
import Link from "next/link";
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
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
    boxColor: "linear-gradient(135deg, #700ccc, #fff, #700fff)",
    backgroundOpacity: "1",
    switcher: "linear-gradient(40deg, #ff0080, #ff8c00 70%)",
    navText: "#fff",
    moveSwitcher: "0",
  },

  dark: {
    textColor: "#ddd",
    backgroundColor: "#202020",
    boxColor: "linear-gradient(180deg, #202020, #555, #202020)",
    backgroundOpacity: ".1",
    switcher: "#303136",
    navText: "#fff",
    moveSwitcher: "1.2rem",
  },
};

//
//
//  FUNCTION MYAPP DECLARATION
//
//
export default function MyApp({ Component, pageProps }) {
  // TOGGLE MENU MOBILE
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  // SET THEME
  const [userTheme, setUserTheme] = useState('light');
  const activeTheme = themes[userTheme];
  const isDarkMode = userTheme === "dark";
  const isLightMode = userTheme === "light";

  const switchTheme = () => {
    if (isDarkMode) {
      setUserTheme("light");
      setCookie(null, "USER_THEME", "light", {
        maxAge: 86400 * 2,
        path: "/",
      });
    }
    // localStorage.setItem('USER_THEME', 'light')}

    if (isLightMode) {
      setUserTheme("dark");
      setCookie(null, "USER_THEME", "dark", {
        maxAge: 86400 * 2,
        path: "/",
      });
    }
  };

  return (
    <>
      <ThemeProvider theme={activeTheme}>
        <GlobalCSS />
        <Header>
          <div className="masterhead">
            <div className="logobox">
              <div
                className={
                  userTheme === "dark" ? "switcher active" : "switcher"
                }
                onClick={switchTheme}
              ></div>
              <Link href="/">
                <div className="logo">
                  <img src="/img/evermindlogo.png" alt="Evermind!"/>
                </div>
              </Link>
            </div>
            <IoMenu className="menu" onClick={toggleMenu} />
            <StyledNav>
              <nav className={isOpen ? "active" : "null"}>
                <IoClose className="closeMenu" onClick={toggleMenu} />
                <Link href="/">Página Inicial</Link>
                <Link href="/articles">Artigos</Link>
                <Link href="/meditations">Meditações</Link>
                <Link href="/">Suporte</Link>
              </nav>
            </StyledNav>
          </div>
        </Header>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
