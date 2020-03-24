import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    body::-webkit-scrollbar {
        width: 5px;
    }

    body::-webkit-scrollbar-track {
        background: #eee;
    }

    body::-webkit-scrollbar-thumb {
        background: #5748ad;
    }
`;
