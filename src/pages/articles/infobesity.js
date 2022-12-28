import styled from "styled-components";

// COMPONENT KAIZEN

const Section = styled.section`
  section {
    min-width: 100%;
    min-height: calc(100vh - 88px);
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background: rgb(100, 100, 100);
    background-size: cover;
    padding-block: 12px;
    background: ${({ theme }) => theme.boxColor};
  }

  article {
    border-radius: 8px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-block: 5vh;
  }


  h1, h3, h4, p{
    margin-block: 12px;
    text-align: center;
    font-family: "Poppins";
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    max-width: 90%;
    
  }
  h1 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  p {
    word-break: break-word;
    margin-block: 12px;
    font-size: 1.2rem;
  }
`;

export default function Infobesity() {
  return (
    <>
      <Section>
        <section>
          <h1>Infobesity</h1>
          <article>
            <h3>O que é isso?</h3>
            <p>
              O excesso de informação, acontece quando a quantidade de
              informação que recebemos excede a quantidade que conseguimos
              processar, causando uma fadiga mental e prejudicando muito mais
              que o imaginado. O termo Infobesity é um termo criado para definir
              um comportamento de obsessão por adquirir informações.
            </p>
            <p>Sim, o conhecimento é importante, te salva de perigos e muda vidas. Porém, informações e conhecimento são coisas diferentes. O conhecimento, vem a partir de experiências de vida após o processamento das informações adquiridas.</p>
          </article>
        </section>
      </Section>
    </>
  );
}
