import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from '~/routes';

import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </>
    );
}

export default App;
