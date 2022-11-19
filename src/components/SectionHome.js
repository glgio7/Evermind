import styled from "styled-components";
// 
// 
// 
// Component Stylesheet
// 
// 
// 

const StyledSection = styled.div`
  .mastercontainer {
    min-height: calc(100vh - 88px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .container {
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColor};
    background-position: center;
    background-size: cover;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 48px);
    position: relative;
    z-index: 5;
  }

  .bg1 {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    background-image: url("/img/unsplash1.jpg");
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }
  .bg2 {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    background-image: url("/img/unsplash2.jpg");
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }
  .bg3 {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    background-image: url("/img/unsplash3.jpg");
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50vw;
    height: 100%;
    padding-block: 12px;
  }

  .mainImage {
    width: 420px;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .kaizen {
    font-size: 10rem;
    font-weight: bold;
    background: rgb(115, 25, 0);
    background: linear-gradient(
      0deg,
      rgba(115, 25, 0, 1) 0%,
      rgba(191, 6, 6, 1) 8%,
      rgba(255, 201, 0, 1) 89%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    text-decoration: none;
    font-size: 2rem;
    font-family: "Ubuntu";
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    margin-bottom: 24px;
  }
  p {
    font-size: 1.1rem;
    font-family: "Ubuntu";
    color: ${({ theme }) => theme.textColor};
    width: 90%;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 24px;
  }
  h3 {
    text-decoration: none;
    font-family: "Ubuntu";
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    font-size: 1.55rem;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
    }
    .mainImage {
      width: 360px;
      height: 360px;
    }
    .container{
      flex-direction: column;
      background-color: ${({ theme }) => theme.backgroundColor};
      width: 100vw;
      height: 100%;
      justify-content: space-around;
      align-items: center;
    }
    
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 100%;
      padding-block: 0px;
    }
    h1 {
      font-size: 2rem;
      font-family: "Ubuntu";
      color: ${({ theme }) => theme.textColor};
      font-weight: bold;
      margin-bottom: 12px;
      text-align: center;
    }
    p {
      width: 90%;
      text-align: center;
      font-size: 1.2rem;
      font-family: "Ubuntu";
      color: ${({ theme }) => theme.textColor};
      font-weight: bold;
      font-style: italic;
      margin-bottom: 24px;
      text-align: center;
    }
    h3 {
      margin-bottom: 6px;
      font-size: 1.5rem;
      text-decoration: none;
      font-family: "Ubuntu";
      color: ${({ theme }) => theme.textColor};
      font-weight: bold;
      text-align: center;
    }
  }
`;

// 
// 
// 
// Component declaration
// 
// 
// 

export default function Section() {
  return (
    <StyledSection>
      <div className="mastercontainer">
        <div className="container">
          <div className="bg1"></div>
          <div className="mainImage">
            <span className="kaizen">改善</span>
          </div>
          <article>
            <h1>Kaizen</h1>
            <p>
              Kai significando mudança, Zen significando bom. Kaizen é um termo
              japonês que define um processo de evolução.
            </p>
            <p>
              Mais do que apenas um termo, o conceito de Kaizen resume-se a
              pequenas mudanças, de forma constante e construtiva.
            </p>
            <p>
              Os benefícios a longo prazo aparecem, contanto que haja mudança,
              por menor que seja, de forma constante. <br />
              Experimente dividir sua vida em áreas, e todos os dias, trabalhe
              em cada área que deseja melhorar, mesmo que por apenas 5 minutos.
            </p>
            <p>
              Como seres humanos, exploramos pela recompensa. Comece explorando
              pequeno, mas pense grande!
            </p>
          </article>
        </div>
        <div className="container">
          <div className="bg2"></div>
          <div className="mainImage">
            <img src="/img/neuro.png" />
          </div>
          <article>
            <h1>Neurotransmissores</h1>
            <p>
              Nassim Taleb, autor dos best sellers "O Antifrágil" e "A lógica do
              Cisne Negro" define um organismo como uma sociedade de indivíduos.
            </p>
            <p>
              Seguindo essa lógica, é possível dizer que nosso cerébro, é uma
              sociedade de indivíduos. Alguns deles, são chamados de
              Neurotransmissores.
            </p>
            <p>
              Se pudessemos definir a vida em uma palavra, "movimento" talvez
              fosse a melhor opção. A idéia aqui é lembrar que, nada que é vivo
              está parado.
            </p>
            <p>
              Conhecer esses "indivíduos" do cérebro é essencial para direcionar
              o movimento da vida para nossos objetivos.
            </p>
          </article>
        </div>
        <div className="container">
          <div className="bg3"></div>
          <div className="mainImage">
            <img src="/img/infinity.png" />
          </div>
          <article>
            <h1>Meditações</h1>
            <p>
              Se você já tentou melhorar sua vida após passar por um período de
              estresse, provavelmente já ouviu alguém dizer: "Você precisa
              meditar!".
            </p>
            <h3>Mas o que é meditar?</h3>
            <p>
              A meditação é um ato de auto-contemplação, onde você se coloca
              como centro da sua realidade e se mantém assim, sem se deixar
              levar por estímulos externos. Existem meditações mais complexas,
              como se abster dos pensamentos e se concentrar em si próprio e
              algum elemento externo (geralmente algo relacionado à natureza), e
              alinhando ambas as coisas. Como se fossem um só!{" "}
            </p>
            <p>
              O que poucas pessoas sabem, é que é possível meditar fazendo
              qualquer coisa, desde que essa atividade possua ritmo e te permita
              entrar no chamado "estado de flow" ou o famoso "estado de
              presença".
            </p>
            <p>
              Na teoria parece complicado, mas considere acessar a aba
              "Meditações" e ouvir algum dos canais recomendados, enquanto
              arruma a casa, faz uma caminhada ou prepara o almoço, sem se
              apegar aos pensamentos que surgirem.
            </p>
          </article>
        </div>
      </div>
    </StyledSection>
  );
}
