import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Container } from './styles';

export default function MainModal({ children, ...styles }) {
    return (
        <Overlay id="modal-overlay">
            <Container {...styles}>{children}</Container>
        </Overlay>
    );
}

MainModal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};
