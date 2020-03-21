import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';

export default function Button({ children, icon, ...rest }) {
    return (
        <Container hasIcon={!!icon} {...rest}>
            <Text>{children}</Text>
            {icon}
        </Container>
    );
}

Button.defaultProps = {
    icon: null
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.element
};
