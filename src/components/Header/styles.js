import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 116px;
  align-items: center;
  gap: 64px;
  border-bottom: 1px solid #3e3b47;
  input {
    background: #262529;
    border: none;
    width: 630px;
    height: 56px;
    border-radius: 10px;
    padding: 19px 24px;

    &::placeholder {
      font-family: "Roboto Slab";
    }
  }

  h1 {
    font-size: 24px;
    color: #ff859b;
    margin: 0;
  }

  .avatar {
    display: flex;
    width: 198px;
    align-items: center;
    gap: 9px;

    h2 {
      font-weight: bold;
      font-size: 14px;
      color: #f4ede8;
    }
    span {
      display: block;
      text-align: end;
      font-size: 14px;
      color: #948f99;
    }

    > img {
      width: 64px;
      border-radius: 50%;
    }
  }
`;
