import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import { store } from '@redux/configure-store';

import 'normalize.css';
import './index.css';
import GlobalRoutes from './router/GlobalRoutes';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename='/'>
                <GlobalRoutes />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
