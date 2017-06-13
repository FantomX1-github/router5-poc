import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './components/App';
import { RouterProvider } from 'react-router5';
import createRouter from './createRouter';

const router = createRouter(true);
const app = <RouterProvider router={ router }><App /></RouterProvider>;

router.start();
ReactDOM.render(
    app,
    document.getElementById('app')
);
