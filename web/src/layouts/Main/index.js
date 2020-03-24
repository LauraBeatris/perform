import React from 'react';

import { Container } from './styles';
import Menu from '~/components/Menu'
import Header from '~/components/Header'

export default function MainLayout() {
  return (
    <Container>
        <Menu />
        <Header />
    </Container>
  );
}
