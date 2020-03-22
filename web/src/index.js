import '~/config/ReactotronConfig';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.__react_toast_provider = React.createRef();

ReactDOM.render(<App />, document.getElementById('root'));
