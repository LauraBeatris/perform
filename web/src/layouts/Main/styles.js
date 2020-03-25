import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: #eee;
`;

export const Content = styled.main`
    padding: 0 2rem;
    @media screen and (min-width: 800px) {
        margin-left: 5rem;
        padding: 0 5rem;
    }
`;
