import '~/config/ReactotronConfig';

import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';

function App() {
    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </>
    );
}

export default App;
