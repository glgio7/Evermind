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
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  .container {
    padding: 1rem;
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColor};
    background-position: center;
    background-size: cover;
    justify-content: space-evenly;
    align-items: center;
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
    background-image: url("/img/unsplash1.jpg");
  }
  .bg2 {
    background-image: url("/img/unsplash2.jpg");
  }
  .bg3 {
    background-image: url("/img/unsplash3.jpg");
  }

  article {
    padding-left: 3rem ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45vw;
    min-height: calc(100vh - 48px);
  }

  .mainImage {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-image: url("/img/unsplashmain.png");
    background-size: cover;
    width: 420px;
    height: 360px;
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
    word-break: break-word;
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    max-width: 100%;
    margin-block: 1rem;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.textColor};
    max-width: 90%;
    font-weight: normal;
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
    height: 36%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: firebrick;
    border: 2px #fff outset;
    
  }
  
  span{
    color: #fff;
    font-weight:bold;
    font-size: 1.5rem
  }

  .ht{
    background-color: #00bb9c;
    right: 60%;
    bottom: 5%;
  }
  
  .glu{
    background-color: #ff8600;
    bottom: 5%;
    margin: 0 auto;
  }
  
  .ach{
    background-color: #ff00e2;
    left: 60%;
    bottom: 5%;
  }
  
  .ne{
    background-color: #ffc900;
    right: 20%;
    bottom: 30%;
  }
  
  .gaba{
    background-color: #ff1300;
    left: 20%;
    bottom: 30%;
  }
  .da{
    background-color: #0099ff;
    margin: 0 auto;
    top: 10%;
  }
  
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
    }
    .mainImage {
      width: 300px;
      height: 240px;
    }
    .ht, .gaba, .ach, .ne, .da, .glu{
      height: 38%;
    }
    .kaizen{
      font-size: 8rem;
    }
    .container {
      flex-direction: column;
      background-color: ${({ theme }) => theme.backgroundColor};
      width: 100vw;
      height: 100%;
      justify-content: space-around;
      align-items: center;
    }

    article {
      padding-left: 0;
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
      max-width: initial;
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

export default function Home() {
  return (
    <StyledSection>
      <div className="mastercontainer">
        <div className="container">
          <div className="bg1"></div>
          <div className="mainImage">
            <Link href="articles/kaizen">
              <span className="kaizen">改善</span></Link>
          </div>
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
        </div>
        <div className="container">
          <div className="bg2"></div>
          <Link href="/articles/neurotransmitters">
            <div className="mainImage" id="neuros"><img src="/img/unsplashmain.jpg" />
              <div className="ht"><span>5HT</span></div>
              <div className="glu"><span>GLU</span></div>
              <div className="ach"><span>ACH</span></div>
              <div className="ne"><span>NE</span></div>
              <div className="gaba"><span>GABA</span></div>
              <div className="da"><span>DA</span></div>
            </div></Link>
          <article>
            <h1>Neurotransmissores</h1>
            <p>
            Os neurotransmissores são essenciais para o funcionamento do sistema nervoso e do cérebro. Eles estão envolvidos em muitos processos fisiológicos e comportamentais, como a regulação do humor, do sono, da memória, do movimento e da resposta ao estresse.
            </p>
            <p>
            Alterações nos níveis ou na função dos neurotransmissores podem levar a disfunções neurológicas e psiquiátricas, como a depressão, a ansiedade, o Parkinson e o Alzheimer.
            </p>
            <p>
            Cada neurotransmissor seria como uma carta com um conteúdo específico e um receptor seria como uma caixa de correio com uma chave específica que só abre aquela carta. Assim, a mensagem só é entregue à célula nervosa que tem o receptor certo para aquele neurotransmissor.
            </p>
          </article>
        </div>
        <div className="container">
          <div className="bg3"></div>
          <Link href="/meditations">
            <div className="mainImage">
              <img src="/img/infinity.png" />
            </div>
          </Link>
          <article>
            <h1>Meditações</h1>
            <p>
            Algumas das primeiras referências à meditação são encontradas em textos hindus antigos, como os Vedas e os Upanishads, que descrevem técnicas de meditação para alcançar a união com o divino.
            </p>
            <p>
            Na tradição budista, a meditação é uma prática central para alcançar a iluminação, sendo ensinada pelo próprio Buda.
            </p>
            <h3>Mas o que é meditar?</h3>
            <p>
              Uma prática milenar que busca a paz interior e equilíbrio emocional.
            </p>
            <p>
              A meditação requer paciência, disciplina e persistência para ser efetiva, sendo um processo individual que exige autoconhecimento.
            </p>
          </article>
        </div>
      </div>
    </StyledSection>
  );
}
