import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import Card from '~/components/Card';
import { Container } from './styles';

export default function Pipe({ data, index: pipeIndex }) {
    return (
        <Container done={data.done}>
            <header>
                <div>
                    <h2>{data.title}</h2>
                    <small>{data.tasks.length} cards</small>
                </div>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#fff" />
                    </button>
                )}
            </header>
            <ul>
                {data.tasks.map((task, index) => (
                    <Card
                        key={task.id}
                        data={task}
                        index={index}
                        pipeIndex={pipeIndex}
                    />
                ))}
            </ul>
        </Container>
    );
}

Pipe.propTypes = {
    data: PropTypes.shape({
        tasks: PropTypes.array,
        title: PropTypes.string,
        creatable: PropTypes.bool,
        done: PropTypes.bool,
    }).isRequired,
    index: PropTypes.number.isRequired,
};
