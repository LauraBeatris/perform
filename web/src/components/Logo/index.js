import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Logo({ withBorder }) {
    return (
        <Container withBorder={withBorder}>
            <Text>Perform</Text>
        </Container>
    );
}

Logo.defaultProps = {
    withBorder: true,
};

Logo.propTypes = {
    withBorder: PropTypes.bool,
};
