import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import React, { useState } from "react";
import { ColorModeContext } from "../context/ColorMode";

const StyledHeader = styled.div`
  .masterhead {
    min-width: 100%;
    height: 6vh;
    min-height: 48px;
    position: fixed;
    z-index: 99;
    top: 0;
    background: rgb(28, 28, 28);
    background: linear-gradient(
      90deg,
      rgba(28, 28, 28, 1) 0%,
      rgba(128, 0, 255, 1) 26%,
      rgba(105, 0, 128, 1) 100%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logobox {
    width: 18vw;
    height: 48px;
    min-width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-inline: 3vw;
    a:hover .logo:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  .logo {
    height: 48px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .logo:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    border-radius: 10px;
    bottom: 3px;
    left: 0;
    background: rgb(156, 0, 255);
    background: linear-gradient(
      90deg,
      rgba(156, 0, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 75%,
      rgba(156, 0, 255, 1) 100%
    );
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }

  .menu {
    display: none;
  }

  .switcher {
    width: 2.5rem;
    height: 1.1rem;
    border: 2px #fff outset;
    background-color: #eee;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }

  .switcher:before {
    content: "";
    width: 0.9rem;
    height: 0.85rem;
    background: ${({ theme }) => theme.switcher};
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: ${({ theme }) => theme.moveSwitcher};
    transition: all 0.3s;
  }

  @media screen and (max-width: 768px) {
    .menu {
      display: block;
      width: 36px;
      height: 36px;
      color: #fff;
      position: absolute;
      left: 5vw;
      cursor: pointer;
    }

    .switcher {
      position: absolute;
      right: 5vw;
    }

    .masterhead {
      justify-content: center;
      height: 48px;
    }
    .logobox {
      min-width: 200px;
      height: 48px;
    }
  }
`;

const StyledNav = styled.div`
  nav {
    margin-inline: 3vw;
    width: 40vw;
    min-width: 360px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.navText};
      font-weight: bold;
      transition: all ease 250ms;
    }
    a:hover {
      opacity: 0.75;
    }
  }

  .closeMenu {
    display: none;
  }

  @media screen and (max-width: 768px) {
    nav {
      z-index: 99;
      position: absolute;
      width: 100vw;
      min-width: initial;
      height: 100vh;
      margin: 0 auto;
      left: -100vw;
      top: 0;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background: rgb(30, 0, 40);
      background: linear-gradient(
        180deg,
        rgba(30, 0, 40, 1) 0%,
        rgba(160, 0, 255, 1) 35%,
        rgba(70, 10, 120, 1) 100%
        );
        transition: all 300ms ease;
      }
      
      nav.active {
        left: 0;
      }
      
      .closeMenu {
        display: block;
        width: 36px;
      height: 36px;
      position: absolute;
      top: 10px;
      left: 10px;
      color: ${({ theme }) => theme.navText};
      cursor: pointer;
    }
  }
`;

export function Header() {
  // TOGGLE MENU MOBILE
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const contexto = React.useContext(ColorModeContext);

  const toggleMode = contexto.toggleMode

  return (
    <StyledHeader>
      <div className="masterhead">
        <div className="logobox">
          <div className="switcher" onClick={toggleMode}></div>
          <Link href="/">
            <div className="logo">
              <img src="/img/evermindlogo.png" alt="Evermind!" />
            </div>
          </Link>
        </div>
        <IoMenu className="menu" onClick={toggleMenu} />
        <StyledNav>
          <nav className={isOpen ? "active" : "null"} onClick={toggleMenu}>
            <IoClose className="closeMenu" />
            <Link href="/">Página Inicial</Link>
            <Link href="/articles">Artigos</Link>
            <Link href="/meditations">Meditações</Link>
            <Link href="https://github.com/glgio7/Evermind" target={"_blank"}>Repositório</Link>
          </nav>
        </StyledNav>
      </div>
    </StyledHeader>
  );
}
