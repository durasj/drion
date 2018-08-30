import React from 'react';
import { injectGlobal } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import colors from './colors';
import TabNavigation from './TabNavigation';
import StartTab from './StartTab';
import SessionsTab from './SessionsTab';
import SettingsTab from './SettingsTab';

injectGlobal`
    body {
        margin: 0;

        line-height: 1;

        background-color: ${colors.light};
    }

    body,
    input,
    textarea,
    select,
    button {
        color: ${colors.dark};
        font-family:
            /* Native font stack */
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            sans-serif,
            /* Emojis/Symbols */
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol";
    }
`;

const RoutesContainer = posed.div({
    enter: { opacity: 1, delay: 100, transition: { duration: 200 }, beforeChildren: true },
    exit: { opacity: 0, transition: { duration: 200 } },
});

const App = () => (
    <Route render={({ location }) => (
        <div>
            <PoseGroup>
                <RoutesContainer key={location.pathname}>
                    <Switch location={location}>
                        <Route exact path="/" component={StartTab} key="start"/>
                        <Route path="/sessions" component={SessionsTab} key="sessions"/>
                        <Route path="/settings" component={SettingsTab} key="settings"/>
                    </Switch>
                </RoutesContainer>
            </PoseGroup>
            <TabNavigation />
        </div>
    )} />
);

export default App;
