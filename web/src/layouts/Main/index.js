import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import Menu from '~/components/Menu';
import Header from '~/components/Header';

export default function MainLayout({ children }) {
    return (
        <Container>
            <Menu />
            <Header />
            <Content>{children}</Content>
        </Container>
    );
}

MainLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};
