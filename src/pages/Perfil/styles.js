import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  header {
    width: 100%;
    padding: 64px 144px;
    height: 144px;
    background-color: rgba(255, 133, 155, 0.05);
  }
  #profile {
    max-width: 340px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    gap: 5px;
    img {
      margin-top: -100px;
      width: 186px;
      height: 186px;
      border-radius: 50%;
      margin-bottom: 64px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > input {
        font-family: "Roboto Slab";
      }
      svg {
        color: #948f99;
        height:18px;
      }
      button {
        background-color: #ff859b;
        color: #312e38;
      }
    }
  }
`;
