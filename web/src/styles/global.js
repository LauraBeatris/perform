import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-track {
        background: #eee;
    }

    body::-webkit-scrollbar-thumb {
        background: #5748ad;
        border-radius: 4px;
    }
`;
