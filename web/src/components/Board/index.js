import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pipe from '~/components/Pipe';
import { Container } from './styles';

import { PipeCreators } from '~/store/ducks/pipes';

export default function Board() {
    const dispatch = useDispatch();
    const pipes = useSelector(state => state.pipes.data);

    useEffect(() => {
        dispatch(PipeCreators.pipesRequest());
    }, [dispatch]);

    return (
        <Container>
            {pipes.length > 0 &&
                pipes.map((pipe, index) => (
                    <Pipe key={pipe.title} data={pipe} index={index} />
                ))}
        </Container>
    );
}
