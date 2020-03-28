import styled from 'styled-components';

export const Container = styled.div`
    background: #eee;
`;

export const Content = styled.main`
    padding: 5rem 2rem 10rem;
    min-height: 100vh;
    overflow: scroll;
    height: 100vh;

    @media screen and (min-width: 800px) {
        height: 100vh;
        margin-left: 5rem;
        padding: 5rem 5rem;
        overflow: initial;
    }
`;
