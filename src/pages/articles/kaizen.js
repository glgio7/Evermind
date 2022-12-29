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
    background-size: cover;
    padding-block: 12px;
    background: rgb(106, 106, 106);
    background: ${({ theme }) => theme.boxColor};
  }

  article {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  h1,h3, h4, p {
    margin-block: 1rem;
    text-decoration: none;
    font-family: "Poppins";
    color: ${({ theme }) => theme.textColor};
    opacity: 1;
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    max-width: 90%;
  }
  
  h1{
    font-size: 2rem;
  }

  h3{
    font-size: 1.5rem;
  }
  h4{
    font-size: 1.25rem;}
  h1,h4{
    text-shadow: 0px 6px 6px ${({ theme }) => theme.backgroundColor};
  }
  
  p {
    word-break: break-word;
    margin-block: 12px;
    font-size: 1.1rem;
  }
`;

export default function Kaizen() {
  return (
    <>
      <Section>
        <section>
          <h1>Kaizen</h1>
          <article>
            <h3>Conceito</h3>
            <p>
              Como dito anteriormente na página inicial, Kaizen é um conceito de
              origem japonesa.
            </p>
            <p>
              Qualquer pessoa que já sentiu estagnada na vida, que buscou
              autoconhecimento ou que tenha tendência ao pensamento reflexivo,
              já sabe, que para atingir grandes objetivos é importante focar
              primeiramente nas pequenas mudanças.
            </p>
            <p>
              No entanto, o Kaizen traz uma ideía que pode evitar que você se
              perca de seus objetivos, e passe a praticar as pequenas mudanças
              talvez até de forma inconsciente, fazendo o que tem de ser feito
              sem pensar no resultado.
            </p>
            <h3>Aplicação</h3>
            <p>
              A nossa realidade é composta por várias áreas, algumas mais gerais
              e outras mais específicas.
            </p>
            <p>
              Com o avanço da ciência, alguns estudos chegaram a conclusão de
              que somos seres biopsicossociais.
            </p>
            <p>
              Sabendo disso, podemos escolher essas 3 áreas para começar as
              mudanças. A seguir segue exemplo dessas áreas desestruturadas:
            </p>
            <h4>Biológico:</h4>
            <p>
              sua biologia, incluindo aspectos como alimentação, sono,
              atividades físicas, etc.
            </p>
            <h4>Psicológico:</h4>
            <p>
              sua mente, incluindo aspectos como leitura, lidar com emoções,
              autodiálogo, raciocínio lógico, etc.
            </p>
            <h4>Sociológico:</h4>
            <p>
              sua vida social, incluindo aspectos como as relações humanas,
              ambientes frequentados, habilidades sociais, etc.
            </p>
            <p>
              No exemplo acima apontei apenas alguns tópicos que constituem a
              realidade humana. Caso haja outros tópicos em sua vida que deseja
              melhorar, é interessante identificar em qual das 3 áreas básicas
              este tópico melhor se encaixa, e então, começar a praticar as
              pequenas mudanças.
            </p>
            <p>
              É importante que você se comprometa apenas com os tópicos que
              conseguirá realizar mudanças, mesmo que só tenha poucos minutos
              para trabalhar nisso. Lembre-se, o conceito de Kaizen baseia-se na
              constância e aos poucos aumentar a sua capacidade de trabalhar em
              diversos tópicos de sua vida.
            </p>
            <h4>Desejo uma boa jornada aos leitores do Evermind!</h4>
          </article>
        </section>
      </Section>
    </>
  );
}
