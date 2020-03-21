import Immutable from 'seamless-immutable';

export const Types = {};

const INITIAL_STATE = Immutable({});

export default function Projects(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const Creators = {};
