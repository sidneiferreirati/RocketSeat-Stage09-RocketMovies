import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:"Roboto Slab",sans-serif;
        font-size:16px;
    }
   
    body{
        background-color:${({ theme }) => theme.COLORS.BACKGROUND};
        color:${({ theme }) => theme.COLORS.WHITE};
        font-family:"Roboto Slab",sans-serif;
    }
   

`;
