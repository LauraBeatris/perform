import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Label, StyledInput } from './styles';

export default function Input({ label, name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue = '', registerField, error } = useField(
        name
    );

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            {label && <Label htmlFor={rest.id}>{label}</Label>}
            <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
        </Container>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
};
