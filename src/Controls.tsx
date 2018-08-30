import React from 'react';
import styled from 'styled-components';

import colors from './colors';
import StartButton from './StartButton';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 1rem;
    padding: 3rem 0 5rem;

    background-color: ${colors.dark};

    /* Create new z-index stack for the start button */
    /* stylelint-disable */
    position: relative;
    z-index: 0;

    &::after {
        content: "";
        position: absolute;
        bottom: -5rem;

        width: 100%;
        height: 10rem;

        background-color: ${colors.light};

        clip-path: ellipse(50% 10% at 50% 50%);
    }
`;

const Controls = () => (
    <StyledWrapper>
        <StartButton />
    </StyledWrapper>
);

export default Controls;
