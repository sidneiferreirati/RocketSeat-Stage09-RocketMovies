import styled from "styled-components";

export const Container = styled.div`
  main {
    width: 1126px;
    margin: 50px auto;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-top: 24px;
      margin-bottom: 40px;
      font-size: 32px;
    }
  }

  form {
    width: 100%;

    > textarea {
      background-color: #262529;
      border: none;
      border-radius: 10px;
      width: 100%;
      height: 274px;
      margin-top: 40px;
      padding: 19px;
      font-family: "Roboto";
      font-size: 16px;
      resize: none;
    }
  }
  .dual {
    width: 100%;
    display: flex;
    gap: 40px;
    input {
      width: 536px;
    }
    button {
      flex: 1;
      margin-top: 40px;
      font-weight: 500;
      padding: 20px 0;
    }
    button:first-child {
      background-color: #0d0c0f;
      color: #ff859b;
    }
  }

  h2 {
    font-size: 20px;
    color: #999591;
    margin: 40px 0 24px;
    font-family: "Roboto Slab";
  }
  section {
    display: flex;
    gap: 24px;
    background-color: #0d0c0f;
    padding: 16px;
    border-radius: 8px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    svg {
      font-size: 24px;
      color: #ff859b;
    }
  }

  .excluir {
    background-color: #262529;
    color: #ffff;
  }
  .new {
    border: 2px dashed #948f99;
    background-color: transparent;
    color: #948f99;
  }
`;
