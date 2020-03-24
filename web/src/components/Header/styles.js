import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: ${({theme}) => `${theme.spaces[4]}px`}
`;

export const UserName = styled.strong`
    color: ${({theme}) => theme.colors.dark};
    font-weight: bold;
    font-size: calc(${({ theme }) => theme.fontSizes.xs} + 2px);
    margin: 0 ${({theme}) => `${theme.spaces[2]}px`};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
`;

export const UserImage = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.7);
    border: 2px solid white;
`


