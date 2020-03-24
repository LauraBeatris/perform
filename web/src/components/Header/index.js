import React from 'react';
import { withTheme } from 'styled-components'
import { MdNotifications, MdMenu } from 'react-icons/md'

import Box from '~/styles/components/Box'
import { Container,  UserName, UserImage } from './styles';

export function Header({theme}) {
  return (
    <Container>
        {/* User Profile Item */}
        <Box marginLeft="auto" backgroundColor="white" display="flex" alignItems="center" padding="2">
            <UserImage src="https://buzz-caribbean.com/app/uploads/2020/03/Bill-Gates-Reddit-AMA-1024x597.jpg" alt="User Profile" title="User"/>
            <UserName>laurabeatriserafim@gmail.com</UserName>
            <MdMenu color={theme.colors.dark} size={theme.fontSizes.md} style={{marginLeft: theme.spaces[2] + 'px', cursor: 'pointer'}} />
        </Box>
        {/* Notifications Box */}
        <Box marginLeft={theme.spaces[3]} backgroundColor="white" display="flex" alignItems="center" padding="2">
            <MdNotifications color="#999" size={theme.fontSizes.md} style={{cursor: 'pointer'}}/>
        </Box>
    </Container>
  );
}

export default withTheme(Header)
