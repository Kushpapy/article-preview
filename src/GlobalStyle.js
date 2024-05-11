import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    &{
        --Very-Dark-Grayish-Blue: hsl(217, 19%, 35%);
--Desaturated-Dark-Blue: hsl(214, 17%, 51%);
--Grayish-Blue: hsl(212, 23%, 69%);
--Light-Grayish-Blue: hsl(210, 46%, 95%);
    }
}

html{
    font-size: 62.5%;
}

*,::before,::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
    display: grid;
    place-items: center;
    font-family: "Manrope", sans-serif;
    background-color: var(--Light-Grayish-Blue);
}


`;

export default GlobalStyle;
