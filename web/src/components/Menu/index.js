import React, { useRef } from 'react';
import { withTheme } from 'styled-components'
import { FaUsers, FaTasks } from 'react-icons/fa'
import { AiFillProject, AiOutlineLogout } from 'react-icons/ai'

import { Container, MenuToggle, ListItems, Item } from './styles';

export function Menu({theme}) {
  const menuRef = useRef(null)

  function handleMenuWidth(event) {
     if (event.target.checked) {
         menuRef.current.classList.add('expanded')
     } else {
         menuRef.current.classList.remove('expanded')
     }
  }

  return (
    <Container ref={menuRef}>
        <MenuToggle id="toggle">
            <input type="checkbox" onChange={handleMenuWidth}/>
            <svg>
                <use xlinkHref="#menu"></use>
                <use xlinkHref="#menu"></use>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
                    <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4"/>
                </symbol>
            </svg>
        </MenuToggle>
        <ListItems>
            <Item>
                <FaUsers size={theme.fontSizes.lg} color={theme.colors.grayLight}/>
                <strong>Teams</strong>
            </Item>
            <Item>
                <AiFillProject size={theme.fontSizes.lg} color={theme.colors.grayLight}/>
                <strong>Projects</strong>
            </Item>
            <Item>
                <FaTasks size={theme.fontSizes.lg} color={theme.colors.grayLight}/>
                <strong>My Tasks</strong>
            </Item>
            <Item>
                <AiOutlineLogout size={theme.fontSizes.lg} color={theme.colors.grayLight}/>
                <strong>Sign out</strong>
            </Item>
        </ListItems>
    </Container>
  );
}

export default withTheme(Menu)
