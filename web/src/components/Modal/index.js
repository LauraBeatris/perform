import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children }) {
    const modalRoot = document.querySelector('#modal-root');
    const wrapper = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(wrapper);

        return () => modalRoot.removeChild(wrapper);
    }, []);

    return ReactDOM.createPortal(children, wrapper);
}
