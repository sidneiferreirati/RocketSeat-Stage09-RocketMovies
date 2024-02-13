import { styled } from "styled-components";

export const Container = styled.ul`
  display: flex;

  list-style: none;
  gap: 8px;

  li {
    background-color: #282124;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 12px;
    font-family: "Roboto";
    text-transform: capitalize;
  }
`;
