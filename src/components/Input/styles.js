import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #262529;
  border-radius: 10px;
  padding: 16px;
  gap: 8px;
  > input {
    border: none;
    background-color: transparent;

    &::placeholder {
      font-size: 16px;
      color: #948f99;
      font-family: "Roboto";
    }
  }
`;
