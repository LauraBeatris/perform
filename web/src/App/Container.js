import React from 'react';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import DndBackend from 'react-dnd-html5-backend';

import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';

import { store, persistor } from '~/store';

/*
    HOC Component responsible for the main logic and configuration of the application
*/
function AppContainer(Component) {
    return class extends React.Component {
        render() {
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
                                    <DndProvider backend={DndBackend}>
                                        <Component {...this.props} />
                                    </DndProvider>
                                </ThemeProvider>
                            </ToastProvider>
                        </PersistGate>
                    </Provider>
                </>
            );
        }
    };
}

AppContainer.propTypes = {
    component: PropTypes.func.isRequired,
};

export default AppContainer;
