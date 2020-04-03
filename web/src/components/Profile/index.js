import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

import { UserCreators } from '~/store/ducks/user';
import Dots from '~/assets/dots.png';
import { Container, Content, ListItems, Item } from './styles';

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

export default function Profile() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    useEffect(() => {
        function handleClose(event) {
            if (!event.target.closest('#profile-container')) {
                console.tron.log('HEY');
                setActive(false);
            }
        }

        document.addEventListener('click', handleClose);

        return () => document.removeEventListener('click', handleClose);
    }, []);

    return (
        <Container id="profile-container">
            <button type="button" onClick={handleClick}>
                <img
                    id="user"
                    src="https://i.pinimg.com/originals/a8/91/12/a8911210d7ecccfc026e69cb8798d231.jpg"
                    alt="User Profile"
                    aria-hidden="true"
                />
                <img id="dots" alt="Button Dots" src={Dots} />
            </button>

            <Content active={active}>
                <div className="arrow" />

                <ListItems>
                    <Item>
                        <Link to="/account">
                            <FaUser size="16px" />
                            <span>Account</span>
                        </Link>
                    </Item>
                    <Item>
                        <SignOut>
                            <AiOutlineLogout size="16px" />
                            <span>Sign Off</span>
                        </SignOut>
                    </Item>
                </ListItems>
            </Content>
        </Container>
    );
}
