import { styled } from "styled-components";

export const Container = styled.div`
  main {
    width: 1121px;
    display: flex;
    margin: 50px auto;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
    > button {
      width: 207px;
      height: 48px;
    }
  }
`;
