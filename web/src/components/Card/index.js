import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { Container, Tag } from './styles';

import { PipeCreators } from '~/store/ducks/pipes';

export default function Card({ data, index, pipeIndex }) {
    const dispatch = useDispatch();
    const cardRef = useRef();
    const [{ isDragging }, dragRef] = useDrag({
        item: { id: data.id, type: 'card', index, pipeIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'card',
        hover: (item, monitor) => {
            const draggedIndex = item.index;
            const targetIndex = index;
            const draggedPipeIndex = item.pipeIndex;
            const targetPipeIndex = pipeIndex;

            if (
                draggedIndex === targetIndex &&
                draggedPipeIndex === targetPipeIndex
            )
                return;

            const targetSize = cardRef.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            /* Prevents to put the dragged after the target if the dragged is before
                (lower index) and didn't passed the target center
            */
            if (draggedIndex < targetIndex && draggedTop < targetCenter) return;

            if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

            dispatch(
                PipeCreators.move(
                    draggedIndex,
                    targetIndex,
                    draggedPipeIndex,
                    targetPipeIndex
                )
            );

            item.index = targetIndex;
            item.pipeIndex = targetPipeIndex;
        },
    });

    dragRef(dropRef(cardRef));

    return (
        <Container ref={cardRef} isDragging={isDragging}>
            <header>
                {data.tags.map(tag => (
                    <Tag
                        key={tag.id}
                        color={tag.color}
                        title={tag.title}
                        data-tooltip={tag.title}
                    />
                ))}
            </header>
            <p>{data.content}</p>
            {data.user && (
                <img
                    src={data.user.avatar}
                    alt="Owner"
                    aria-label="Owner"
                    title={data.user.name}
                />
            )}
        </Container>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        user: PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
        }),
        content: PropTypes.string,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                color: PropTypes.string,
            })
        ),
    }).isRequired,
    index: PropTypes.number.isRequired,
    pipeIndex: PropTypes.number.isRequired,
};
