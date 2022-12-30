import styled from "styled-components";
import Link from "next/dist/client/link";


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
    border-radius: 20px;
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

  .bg1, .bg2, .bg3 {
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
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }
  .bg1{
    background-image: url("/img/unsplash1.png");
  }
  .bg2 {
    background-image: url("/img/unsplash2.png");
  }
  .bg3 {
    background-image: url("/img/unsplash3.png");
  }

  article {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    min-height: calc(100vh - 48px);
  }

  .mainImage {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-image: url("/img/unsplashmain.jpg");
    width: 420px;
    height: 420px;
    position: relative;
  }
  .kaizen {
    font-size: 10rem;
    font-weight: bold;
    background: rgb(115, 25, 0);
    background: linear-gradient(
      0deg,
      rgba(115, 25, 0, 1) 0%,
      rgba(190, 6, 6, 1) 10%,
      rgba(240, 200, 0, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    max-width: 90%;
    margin-block: 1rem;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.textColor};
    max-width: 90%;
    font-weight: bold;
    margin-block: .5rem;
  }
  h3 {
    max-width: 90%;
    font-size: 2rem;
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    margin-block: 1rem;
  }
  .ht, .gaba, .ach, .ne, .da, .glu{
    border-radius: 50%;
    width: 30%;
    height: 30%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: firebrick;
    border: 2px #fff outset;
    
  }
  .neuros{
    object-fit: cover;
  }
  span{
    color: #fff;
    font-weight:bold;
    font-size: 1.5rem
  }

  .ht{
    background-color: #00bb9c;
    right: 15%;
    top: 8.5%;
  }

  .glu{
    background-color: #ff8600;
    right: 15%;
    top: 35%;
  }

  .ach{
    background-color: #ff00e2;
    right: 15%;
    top: 61.5%;
  }

  .ne{
    background-color: #ffc900;
    right: 40%;
    top: 48%;
  }

  .gaba{
    background-color: #ff1300;
    right: 40%;
    top: 21%;
  }
  .da{
    background-color: #0099ff;
    right: 65%;
    top: 35%;
  }
  
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
    }
    .mainImage {
      width: 300px;
      height: 300px;
    }
    .kaizen{
      font-size: 8rem;
    }
    .container {
      padding: 1rem 0;
      flex-direction: column;
      background-color: ${({ theme }) => theme.backgroundColor};
      width: 100vw;
      height: 100%;
      justify-content: space-around;
      align-items: center;
    }

    article {
      padding: .25rem;
      min-height: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 100%;
    }
    h1, h3, p {
      word-break: break-word;
      width: 100%;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
    }
    p{
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    h3{
      font-size: 1.5rem;
    }
    span{
      font-size: 1rem;
    }
  }
`;

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
          <article>
            <h1>Kaizen</h1>
            <p>
              Kaizen é um termo japonês que define um processo de evolução, um conceito de
              pequenas mudanças, de forma constante e construtiva.
            </p>
            <p>
              Os benefícios a longo prazo aparecem, contanto que haja mudança,
              por menor que seja, sendo constante. <br />
              Experimente dividir sua vida em áreas, e todos os dias, trabalhe
              em cada área que deseja melhorar, mesmo que por apenas 5 minutos.
            </p>
            <p>Como seres humanos, exploramos pela recompensa. Comece explorando
              pequeno, mas pense grande!
            </p>
          </article>
          <div className="mainImage">
            <Link href="articles/kaizen">
            <span className="kaizen">改善</span></Link>
          </div>
        </div>
        <div className="container">
          <div className="bg2"></div>
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
            <Link href="/articles/neurotransmitters">
          <div className="mainImage"><img src="/img/unsplashmain.jpg"/>
            <div className="ht"><span>5HT</span></div>
            <div className="glu"><span>GLU</span></div>
            <div className="ach"><span>ACH</span></div>
            <div className="ne"><span>NE</span></div>
            <div className="gaba"><span>GABA</span></div>
            <div className="da"><span>DA</span></div>
          </div></Link>
        </div>
        <div className="container">
          <div className="bg3"></div>
          <article>
            <h1>Meditações</h1>
            <p>
              Se você já tentou melhorar sua vida após passar por um período de
              estresse, provavelmente já ouviu alguém dizer: "Você precisa
              meditar!".
            </p>
            <p>
              O que poucas pessoas sabem, é que é possível meditar fazendo
              qualquer coisa, desde que essa atividade possua ritmo e te permita
              entrar no chamado "estado de flow" ou o famoso "estado de
              presença".
            </p>
            <h3>Mas o que é meditar?</h3>
            <p>
              A meditação é um ato de auto-contemplação, onde você se coloca
              como centro da sua realidade e se mantém assim, sem se deixar
              levar por estímulos externos. Existem meditações mais complexas,
              como se abster dos pensamentos e se concentrar em si próprio e
              algum elemento externo (geralmente algo relacionado à natureza), e
              alinhando ambas as coisas. Como se fossem um só!
            </p>
            <p>
              Na teoria parece complicado, mas considere acessar a aba
              "Meditações" e ouvir algum dos canais recomendados, enquanto
              arruma a casa, faz uma caminhada ou prepara o almoço, sem se
              apegar aos pensamentos que surgirem.
            </p>
          </article>
          <div className="mainImage">
            <Link href="/meditations">
            <img src="/img/infinity.png" /></Link>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
