import React from 'react';
import styled from 'styled-components';

import { Heading1 } from './Heading';

const StyledContainer = styled.div`
    padding: 1rem;
`;

const SettingsTab = () => (
    <StyledContainer>
        <Heading1>Settings</Heading1>
    </StyledContainer>
);

export default SettingsTab;
