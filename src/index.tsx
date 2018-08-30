import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

import App from './App';

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('app'),
    () => SplashScreen ? SplashScreen.hide() : console.warn(
        'SplashScreen plugin not loaded.',
        'Splash will be hidden automatically.',
    ),
);
