import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import { FaUsers, FaTasks } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';

import { Overlay, Container, Logo, ListItems, Item } from './styles';
import { TeamCreators } from '~/store/ducks/teams';

import TeamSwitcher from '~/components/TeamSwitcher/Menu';

export function Menu({ location }) {
    const dispatch = useDispatch();

    function toggleTeamSwitcher() {
        dispatch(TeamCreators.toggleTeamSwitcher());
    }

    return (
        <Overlay>
            <Container id="menu-container">
                <ListItems>
                    <Item id="logo">
                        <Link to="/">
                            <Logo>P</Logo>
                        </Link>
                    </Item>

                    <Item onClick={toggleTeamSwitcher}>
                        <FaUsers size="35px" />
                        <strong>Teams</strong>
                    </Item>
                    <Item active={location.pathname.includes('projects')}>
                        <Link to="/projects">
                            <AiFillProject size="35px" />
                            <strong>Projects</strong>
                        </Link>
                    </Item>
                    <Item active={location.pathname.includes('tasks')}>
                        <Link to="/tasks">
                            <FaTasks size="35px" />
                            <strong>My Tasks</strong>
                        </Link>
                    </Item>
                </ListItems>
            </Container>
            <TeamSwitcher />
        </Overlay>
    );
}

Menu.propTypes = {
    theme: PropTypes.shape({
        colors: PropTypes.shape(),
        fontSizes: PropTypes.shape(),
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

export default withRouter(withTheme(Menu));
