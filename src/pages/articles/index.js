import Link from "next/link";
import styled from "styled-components";

// COMPONENT ARTICLES

const StyledSection = styled.section`
  section {
    width: 100%;
    min-height: calc(100vh - 88px);
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    padding-bottom: 10%;
    position: relative;
    z-index: 5;
  }
  .bg{
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
    background-image: url("/img/unsplash2.png");
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }
  a {
    width: 80%;
  }
  
  .container {
    cursor: pointer;
    box-shadow: #8000c7 0 0px 30px -15px;
    border: none;
    border-radius: 8px;
    margin-block: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 84px;
    background: rgb(100, 100, 100);
    background: ${({ theme }) => theme.boxColor};
    transition: all ease 100ms;

      &:hover {
        scale: 1.02;
      }
      &:active {
        scale: 1;
      }
  }
  h1, h3{

    font-family: "Poppins";
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
  }

  h1 {
    margin-block: 24px;
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
`;

export default function Articles() {
  return (
    <>
      <StyledSection>
        <section><div className="bg"></div>
          <h1>Artigos</h1>
          <Link href="/articles/neurotransmitters">
            <button className="container">
              <h3>Neurotransmissores</h3>
            </button>
          </Link>
          <Link href="/articles/kaizen">
            <button className="container">
              <h3>Kaizen</h3>
            </button>
          </Link>
          <Link href="/articles/infobesity">
            <button className="container">
              <h3>Excesso de informação</h3>
            </button>
          </Link>
          <Link href="https://encurtador.com.br/ou023" target="_blank">
            <button className="container">
              <h3>Notícias sobre a mente</h3>
            </button>
          </Link>
        </section>
      </StyledSection>
    </>
  );
}
