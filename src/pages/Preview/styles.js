import { styled } from "styled-components";

export const Container = styled.div`
  main {
    width: 1137px;
    margin: 40px auto 0;

    .dual {
      display: flex;
      gap: 19px;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 40px;
      h2 {
        font-size: 36px;
      }
      svg {
        color: #ff859b;
        font-size: 20px;
      }
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
        border: 1px solid #3e3b47;
      }
      h3 {
        color: #f4ede8;
        font-size: 16px;
        font-family: "Roboto Slab";
        font-weight: regular;
      }
      span {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    Tag {
      margin-top: 50px;
    }

    .content {
      margin-top: 40px;
      p {
        font-family: "Roboto Slab";
        font-size: 15px;
        line-height: 28px;
        text-indent: 37px;
      }
    }
  }
`;
