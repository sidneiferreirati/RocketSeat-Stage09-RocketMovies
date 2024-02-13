import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #282124;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  .stars > svg {
    font-size: 12px;
  }

  h1 {
    font-size: 24px;
  }
  p {
    color: #999591;
    font-size: 16px;
    height: 41px;
    overflow: hidden;
    font-family: "Roboto";
    margin: 15px 0;
  }

  ul {
    display: flex;
    gap: 8px;

    li {
      list-style: none;
      background-color: #312e38;
      padding: 5px 16px;
      font-size: 12px;
      border-radius: 8px;
      color: #e5e5e5;
    }
  }
`;
