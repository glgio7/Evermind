import React, { useState } from "react";
import StyledNeuro from "./styles";


const Neurotransmitters = () => {

  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const expandArticle = (num) => {

    setIsOpen((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = key === num.toString() ? !newState[key] : false;
      });
      return newState;
    });
  };

  return (
    <>
      <StyledNeuro>
        <section>
          <div className="bg"></div>
          <div className="container1">
            <button onClick={() => expandArticle(1)}>
              <h3>DA - Dopamina</h3>
            </button>

            <p className={isOpen[1] ? "active" : "null"}>
              A dopamina tem sido chamada de nossa “molécula da motivação”.{" "}
              <br />
              Ela aumenta o nosso direcionamento, foco e concentração. Nos
              permite planejar com antecedência e resistir aos impulsos, para
              que possamos alcançar nossos objetivos.
            </p>
          </div>
          <div className="container2">
            <button onClick={() => expandArticle(2)} className="button2">
              <h3>NE - Noradrenalina</h3>
            </button>
            <p className={isOpen[2] ? "active" : "null"}>
              Além de aumentar a energia química no organismo para que esse
              possa dar respostas rápidas ao estresse, a noradrenalina também
              atua sobre o sistema cardiovascular aumentando os batimentos
              cardíacos e o fluxo sanguíneo. <br />A noradrenalina é um
              precursor da adrenalina, e atua como um importante vasoconstritor,
              ou seja, na contração dos vasos sanguíneos
            </p>
          </div>
          <div className="container3">
            <button onClick={() => expandArticle(3)} className="button3">
              <h3>ACH - Acetilcolina</h3>
            </button>
            <p className={isOpen[3] ? "active" : "null"}>
              A acetilcolina (ACh) foi o primeiro neurotransmissor descoberto
              (1921). Produzido no sistema nervoso central e periférico, ele
              está relacionado diretamente com a regulação da memória, do
              aprendizado e do sono.
            </p>
          </div>
          <div className="container4">
            <button onClick={() => expandArticle(4)} className="button4">
              <h3>GABA - Aminoácido</h3>
            </button>
            <p className={isOpen[4] ? "active" : "null"}>
              Ao se ligar a uma proteína presente no cérebro, conhecida como
              receptor GABA, esse aminoácido produz um efeito relaxante e
              calmante, o que pode ajudar a pegar no sono e auxiliar na
              diminuição da ansiedade, do estresse e do medo.
            </p>
          </div>
          <div className="container5">
            <button onClick={() => expandArticle(5)} className="button5">
              <h3>GLU - Glutamato</h3>
            </button>
            <p className={isOpen[5] ? "active" : "null"}>
              Apesar de não ser exatamente um neurotransmissor, ele atua no
              desenvolvimento neural, na plasticidade sináptica, no aprendizado,
              na memória e possui papel fundamental no mecanismo de algumas
              doenças neurodegenerativas.
            </p>
          </div>
          <div className="container6">
            <button onClick={() => expandArticle(6)} className="button6">
              <h3>5HT - Serotonina</h3>
            </button>
            <p className={isOpen[6] ? "active" : "null"}>
              A serotonina, conhecida como o hormônio da felicidade, regula o
              ritmo cardíaco, do sono, do apetite, do humor, da memória e da
              temperatura do corpo.
            </p>
          </div>
        </section>
      </StyledNeuro>
    </>
  );
};

export default Neurotransmitters;