import styled from "styled-components";
import { useState } from "react";

// COMPONENT NEUROTRANSMITTERS

const StyledNeuro = styled.section`
  button {
    background-image: linear-gradient(
      0deg,
      rgba(1, 30, 143, 1) 0%,
      rgba(0, 104, 255, 1) 32%,
      rgba(0, 194, 255, 1) 89%
    );
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    color: #ffffff;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2rem;
    line-height: 6rem;
    width: 80%;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:active,
  button:hover {
    outline: 0;
    scale: 1.01;
  }

  button:active {
    transform: scale(0.9);
  }

  section {
    margin-top: 48px;
    display: flex;
    background-image: url("/img/articlesbg.jpg");
    flex-direction: column;
    background-position: center;
    background-size: cover;
    width: 100vw;
    min-height: calc(100vh - 48px);
    justify-content: center;
    align-items: center;
  }
  .container1,
  .container2,
  .container3,
  .container4,
  .container5,
  .container6 {
    margin-block: 9px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      margin-block: 20px;
      background-color: ${({ theme }) => theme.colors.backgroundColor};
      text-align: center;
      font-size: 0rem;
      font-family: "Ubuntu";
      color: ${({ theme }) => theme.colors.textColor};
      width: 80%;
      border-radius: 8px;
      display: none;
      align-items: center;
      padding-inline: 20px;
    }
    button {
      width: 80%;
    }
    p.active {
      display: flex;
      padding-block: 40px;
      min-height: 84px;
      font-size: 1.25rem;
    }
  }
  .button2 {
    background: rgb(112, 90, 0);
    background: linear-gradient(
      0deg,
      rgba(112, 90, 0, 1) 0%,
      rgba(255, 171, 0, 1) 28%,
      rgba(255, 188, 0, 1) 68%
    );

    width: 80%;
  }
  .button3 {
    background: rgb(90, 0, 112);
    background: linear-gradient(
      0deg,
      rgba(90, 0, 112, 1) 0%,
      rgba(163, 7, 209, 1) 28%,
      rgba(255, 0, 228, 1) 65%
    );
    width: 80%;
  }
  .button4 {
    background: rgb(112, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(112, 0, 0, 1) 0%,
      rgba(209, 7, 7, 1) 28%,
      rgba(255, 0, 61, 1) 65%
    );
    width: 80%;
  }

  .button5 {
    background: rgb(143, 63, 1);
    background: linear-gradient(
      0deg,
      rgba(143, 63, 1, 1) 0%,
      rgba(255, 98, 0, 1) 42%,
      rgba(255, 136, 0, 1) 89%
    );
    width: 80%;
  }
  .button6 {
    background: rgb(1, 140, 143);
    background: linear-gradient(
      0deg,
      rgba(1, 140, 143, 1) 0%,
      rgba(0, 255, 188, 1) 32%,
      rgba(0, 224, 255, 1) 89%
    );
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
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
          <div className="container1">
            <button onClick={expandArticle1}>
              <h3>DA</h3>
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
              <h3>NE</h3>
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
              <h3>ACH</h3>
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
              <h3>GABA</h3>
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
              <h3>GLU</h3>
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
              <h3>5HT</h3>
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
