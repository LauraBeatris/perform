import Ws from '@adonisjs/websocket-client';

const ws = Ws(`ws://${process.env.REACT_APP_API}`, {
    reconnectionAttempts: 200,
});
ws.connect();

export default ws;
