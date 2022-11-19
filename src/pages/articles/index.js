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
    background-image: url("/img/articlesbg.jpg");
    background-position: center;
    background-size: cover;
    padding-bottom: 10%;
  }
  a {
    width: 80%;

    &:hover {
      outline: 0;
      scale: 1.01;
    }
    &:active {
      scale: 0.95;
    }
  }
  .container {
    border-radius: 8px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 84px;
    background: rgb(106, 106, 106);
    background: ${({ theme }) => theme.colors.boxColor};
  }
  h1 {
    margin-top: 24px;
    font-size: 1.8rem;
    font-family: "Ubuntu";
    color: #fff;
    font-weight: 600;
  }
  h3 {
    text-decoration: none;
    font-family: "Ubuntu";
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 1;
    font-weight: 600;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export default function Articles() {
  return (
    <>
      <StyledSection>
        <section>
          <h1>Artigos</h1>
          <a href="/articles/neurotransmitters">
            <div className="container">
              <h3>Neurotransmissores</h3>
            </div>
          </a>
          <a href="/articles/kaizen">
            <div className="container">
              <h3>Kaizen</h3>
            </div>
          </a>
          <a href="https://encurtador.com.br/ou023" target="_blank">
            <div className="container">
              <h3>Notícias sobre a mente humana</h3>
            </div>
          </a>
        </section>
      </StyledSection>
    </>
  );
}
