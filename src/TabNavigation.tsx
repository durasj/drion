import React from 'react';
import styled from 'styled-components';

import colors from './colors';
import TabLink from './TabLink';

const powerIcon = require('./assets/power-icon.svg');
const listIcon = require('./assets/list-icon.svg');
const togglesIcon = require('./assets/toggles-icon.svg');

const StyledWrapper = styled.div`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;

    color: ${colors.primary};

    background: ${colors.light};
    box-shadow: 0 0 2rem .1rem ${colors.chrome};
`;

const TabNavigation = () => (
    <StyledWrapper>
        <TabLink name="Start" to="/" icon={powerIcon} />
        <TabLink name="Sessions" to="/sessions" icon={listIcon} />
        <TabLink name="Settings" to="/settings" icon={togglesIcon} />
    </StyledWrapper>
);

export default TabNavigation;
