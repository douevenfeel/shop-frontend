import { App } from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then((response) => console.log('service worker registered'))
            .catch((error) => console.log('service worker not registered', error));
    });
}
