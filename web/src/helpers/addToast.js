import lodash from 'lodash';

export default function addToast(message, config) {
    const addToast = lodash.get(window, '__react_toast_provider.current.add');

    if (addToast) {
        addToast(message, config)
    }
}
