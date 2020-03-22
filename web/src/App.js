import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';

import { store, persistor } from '~/store';

function App() {
    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:800&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyles />
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ToastProvider
                        ref={window.__react_toast_provider}
                        autoDismiss
                        autoDismissTimeout={2500}
                        placement="top-right"
                    >
                        <ThemeProvider theme={theme}>
                            <Routes />
                        </ThemeProvider>
                    </ToastProvider>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
