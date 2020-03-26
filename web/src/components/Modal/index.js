import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Container } from './styles';

export default function Modal({ children, ...styles }) {
    return (
        <Overlay>
            <Container {...styles}>{children}</Container>
        </Overlay>
    );
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};
