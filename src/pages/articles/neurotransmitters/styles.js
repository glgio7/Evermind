import styled from "styled-components";

const StyledNeuro = styled.section`
  button {
    background: ${({ theme }) => theme.boxColor};
    border: 0;
    border-radius: 8px;
    box-shadow: #8000c7 0 10px 30px -5px;
    color: #ffffff;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2rem;
    line-height: 6rem;
    width: 80%;
    cursor: pointer;
    transition: all 0.2s;
      &:hover {
      outline: 0;
      scale: 1.01;
      }
    
      &:active {
      scale: 1;
      }
  }
  
  h3 {
    color: ${({ theme }) => theme.textColor};
  }

  section {
    width: 100%;
    min-height: calc(100vh - 88px);
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    position: relative;
    z-index: 5;
  }
  .bg {
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
    background-image: url("/img/unsplash3.png");
    opacity: ${({ theme }) => theme.backgroundOpacity};
  }
  .container1,
  .container2,
  .container3,
  .container4,
  .container5,
  .container6 {
    margin-block: 1rem;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      background-color: ${({ theme }) => theme.backgroundColor};
      text-align: center;
      font-size: 0rem;
      color: ${({ theme }) => theme.textColor};
      width: 78%;
      border-radius:  0 0 8px 8px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 750ms;
      padding-inline: 20px;
    }
    button {
      width: 80%;
    }
    p.active {
      opacity: 1;
      pointer-events: all;
      padding-block: 2rem;
      min-height: 84px;
      font-size: 1.25rem;
    }
  }
`;

export default StyledNeuro;