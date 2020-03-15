import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';

export default function Button({ children, ...rest }) {
    return (
        <Container {...rest}>
            <Text>{children}</Text>
        </Container>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
};
