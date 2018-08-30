import React from 'react';
import styled from 'styled-components';

import { Heading1 } from './Heading';

const StyledContainer = styled.div`
    padding: 1rem;
`;

const SessionsTab = () => (
    <StyledContainer>
        <Heading1>Previous Sessions</Heading1>
    </StyledContainer>
);

export default SessionsTab;
