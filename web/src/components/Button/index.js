import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, Text } from './styles';

export default function Button({ children, icon, ...rest }) {
    return (
        <StyledButton {...rest}>
            <Text>{children}</Text>
            {icon}
        </StyledButton>
    );
}

Button.defaultProps = {
    icon: null,
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.element,
};
