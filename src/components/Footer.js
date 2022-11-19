import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";

const StyledFooter = styled.div`
  main {
    min-width: 100%;
    height: 40px;
    background-color: #202020;
    color: #fff;
    bottom: 0;
    position: relative;
    display: flex;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }

  .container {
    height: 100%;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icons {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    main {
      position: relative;
      height: 40px;
    }
    .container {
      width: 50vw;
    }
    .icons {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <main>
        <div className="container">
          <a href="https://github.com/glgio7" target="_blank">
            <FaGithub className="icons" title="Visit my GitHub" />
          </a>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=GEGWZ4NGKNSEW"
            target="_blank"
          >
            <FaPaypal className="icons" title="Donate" />
          </a>
          <a href="mailto:giovanelucas00@outlook.com" target="_blank">
            <FaRegEnvelope className="icons" title="Send me an email" />
          </a>
        </div>
      </main>
    </StyledFooter>
  );
}
