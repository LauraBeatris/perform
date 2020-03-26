import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components';
import { FaUsers, FaTasks } from 'react-icons/fa';
import { AiFillProject, AiOutlineLogout } from 'react-icons/ai';
import { Link, withRouter } from 'react-router-dom';

import { Container, MenuToggle, Logo, ListItems, Item } from './styles';
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
    const menuRef = useRef(null);

    function handleMenuWidth(event) {
        if (event.target.checked) {
            menuRef.current.classList.add('expanded');
        } else {
            menuRef.current.classList.remove('expanded');
        }
    }

    function toggleTeamsList() {
        setTeamsActive(!teamsActive);
    }

    return (
        <>
            <Container ref={menuRef}>
                <MenuToggle id="toggle">
                    <input type="checkbox" onChange={handleMenuWidth} />
                    <svg>
                        <use xlinkHref="#menu" />
                        <use xlinkHref="#menu" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'none' }}
                    >
                        <symbol
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 56"
                            id="menu"
                        >
                            <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
                        </symbol>
                    </svg>
                </MenuToggle>
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
