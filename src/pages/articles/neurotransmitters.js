import styled from "styled-components";
import React, { useState } from "react";

// COMPONENT NEUROTRANSMITTERS

const StyledNeuro = styled.section`
  button {
    background: ${({ theme }) => theme.boxColor};
    border: 0;
    border-radius: 8px;
    box-shadow: #8000c7 0 10px 30px -5px;
    color: #ffffff;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2rem;
    line-height: 6rem;
    width: 80%;
    cursor: pointer;
    transition: all 0.2s;
      &:hover {
      outline: 0;
      scale: 1.01;
      }
    
      &:active {
      scale: 1;
      }
  }
  
  h3 {
    color: ${({ theme }) => theme.textColor};
  }

  section {
    width: 100%;
    min-height: calc(100vh - 88px);
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    position: relative;
    z-index: 5;
  }
  .bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    background-image: url("/img/unsplash3.png");
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }
  .container1,
  .container2,
  .container3,
  .container4,
  .container5,
  .container6 {
    margin-block: 1rem;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      background-color: ${({ theme }) => theme.backgroundColor};
      text-align: center;
      font-size: 0rem;
      color: ${({ theme }) => theme.textColor};
      width: 78%;
      border-radius:  0 0 8px 8px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 750ms;
      padding-inline: 20px;
    }
    button {
      width: 80%;
    }
    p.active {
      opacity: 1;
      pointer-events: all;
      padding-block: 2rem;
      min-height: 84px;
      font-size: 1.25rem;
    }
  }
`;

export default function Neurotransmitters() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const expandArticle1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const expandArticle2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const expandArticle3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const expandArticle4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const expandArticle5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen6(false);
  };
  const expandArticle6 = () => {
    setIsOpen6(!isOpen6);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  return (
    <>
      <StyledNeuro>
        <section>
          <div className="bg"></div>
          <div className="container1">
            <button onClick={expandArticle1}>
              <h3>DA - Dopamina</h3>
            </button>

            <p className={isOpen1 ? "active" : "null"}>
              A dopamina tem sido chamada de nossa “molécula da motivação”.{" "}
              <br />
              Ela aumenta o nosso direcionamento, foco e concentração. Nos
              permite planejar com antecedência e resistir aos impulsos, para
              que possamos alcançar nossos objetivos.
            </p>
          </div>
          <div className="container2">
            <button onClick={expandArticle2} className="button2">
              <h3>NE - Noradrenalina</h3>
            </button>
            <p className={isOpen2 ? "active" : "null"}>
              Além de aumentar a energia química no organismo para que esse
              possa dar respostas rápidas ao estresse, a noradrenalina também
              atua sobre o sistema cardiovascular aumentando os batimentos
              cardíacos e o fluxo sanguíneo. <br />A noradrenalina é um
              precursor da adrenalina, e atua como um importante vasoconstritor,
              ou seja, na contração dos vasos sanguíneos
            </p>
          </div>
          <div className="container3">
            <button onClick={expandArticle3} className="button3">
              <h3>ACH - Acetilcolina</h3>
            </button>
            <p className={isOpen3 ? "active" : "null"}>
              A acetilcolina (ACh) foi o primeiro neurotransmissor descoberto
              (1921). Produzido no sistema nervoso central e periférico, ele
              está relacionado diretamente com a regulação da memória, do
              aprendizado e do sono.
            </p>
          </div>
          <div className="container4">
            <button onClick={expandArticle4} className="button4">
              <h3>GABA - Aminoácido</h3>
            </button>
            <p className={isOpen4 ? "active" : "null"}>
              Ao se ligar a uma proteína presente no cérebro, conhecida como
              receptor GABA, esse aminoácido produz um efeito relaxante e
              calmante, o que pode ajudar a pegar no sono e auxiliar na
              diminuição da ansiedade, do estresse e do medo.
            </p>
          </div>
          <div className="container5">
            <button onClick={expandArticle5} className="button5">
              <h3>GLU - Glutamato</h3>
            </button>
            <p className={isOpen5 ? "active" : "null"}>
              Apesar de não ser exatamente um neurotransmissor, ele atua no
              desenvolvimento neural, na plasticidade sináptica, no aprendizado,
              na memória e possui papel fundamental no mecanismo de algumas
              doenças neurodegenerativas.
            </p>
          </div>
          <div className="container6">
            <button onClick={expandArticle6} className="button6">
              <h3>5HT - Serotonina</h3>
            </button>
            <p className={isOpen6 ? "active" : "null"}>
              A serotonina, conhecida como o hormônio da felicidade, regula o
              ritmo cardíaco, do sono, do apetite, do humor, da memória e da
              temperatura do corpo.
            </p>
          </div>
        </section>
      </StyledNeuro>
    </>
  );
}
