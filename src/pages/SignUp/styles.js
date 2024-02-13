import { styled } from "styled-components";
import backgroundImg from "../../assets/cinema.png";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  header {
    margin: 0 auto;
    align-self: center;

    h1 {
      font-family: "Roboto Slab";
      font-size: 48px;
      color: #ff859b;
      font-weight: bold;
    }
    p {
      font-family: "Roboto Slab";
      font-size: 14px;
      margin-bottom: 48px;
    }
    h2 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 48px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    a {
      margin-top: 42px;
      justify-content: center;
    }
  }
  #background {
    height: 100vh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
