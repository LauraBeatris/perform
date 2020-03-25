import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Logo({ withBorder, margin, marginBottom }) {
    return (
        <Container
            withBorder={withBorder}
            margin={margin}
            marginBottom={marginBottom}
        >
            <Text>Perform</Text>
        </Container>
    );
}

Logo.defaultProps = {
    withBorder: true,
    margin: '0',
    marginBottom: '0',
};

Logo.propTypes = {
    withBorder: PropTypes.bool,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
