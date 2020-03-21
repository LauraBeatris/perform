import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Logo({ withBorder, margin, marginBottom }) {
    return (
        <Container withBorder={withBorder} margin={margin} marginBottom={marginBottom}>
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
