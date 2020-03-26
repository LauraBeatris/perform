import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components';
import { FaUsers, FaTasks } from 'react-icons/fa';
import { AiFillProject, AiOutlineLogout } from 'react-icons/ai';
import { Link, withRouter } from 'react-router-dom';

import { Container, Logo, ListItems, Item } from './styles';
import { UserCreators } from '~/store/ducks/user';
import TeamSwitcher from '~/components/TeamSwitcher/Menu';

function SignOut({ children }) {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(UserCreators.logoutRequest());
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            style={{ background: 'none', border: 'none', display: 'inherit' }}
        >
            {children}
        </button>
    );
}

SignOut.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};

export function Menu({ location }) {
    const [teamsActive, setTeamsActive] = useState(false);

    function toggleTeamsList() {
        setTeamsActive(!teamsActive);
    }

    return (
        <>
            <Container>
                <ListItems>
                    <Item id="logo">
                        <Link to="/">
                            <Logo>P</Logo>
                        </Link>
                    </Item>

                    <Item onClick={toggleTeamsList}>
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
                    <Item>
                        <SignOut>
                            <AiOutlineLogout size="35px" />
                            <strong>Sign out</strong>
                        </SignOut>
                    </Item>
                </ListItems>
            </Container>
            <TeamSwitcher active={teamsActive} />
        </>
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
