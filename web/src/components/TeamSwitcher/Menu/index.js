import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function TeamSwitcherMenu({ active }) {
    useEffect(() => {}, []);

    return <Container active={active} />;
}

TeamSwitcherMenu.defaultProps = {
    active: false,
};

TeamSwitcherMenu.propTypes = {
    active: PropTypes.bool,
};
