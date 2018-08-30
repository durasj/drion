import React from 'react';
import styled from 'styled-components';

import colors from './colors';

const StyledButton = styled.button`
    position: relative;

    display: block;
    width: 55vw;
    max-width: 15rem;
    height: 55vw;
    max-height: 15rem;
    margin: 2rem;
    padding: 1rem;

    color: ${colors.light};
    font-weight: bolder;
    font-size: 2rem;

    background: linear-gradient(to right top, ${colors.secondary}, ${colors.primary});
    border: 0;
    border-radius: 100%;
    cursor: pointer;

    -webkit-tap-highlight-color: transparent;

    span {
        display: block;
        font-size: .75rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: -20%;
        right: -20%;
        bottom: -20%;
        left: -20%;
        z-index: -1;

        display: inline-block;

        background-image:
            radial-gradient(transparent, ${colors.dark} 60%),
            linear-gradient(to right top, ${colors.secondary}, ${colors.primary});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;

        transition: background .4s;
    }

    &:active,
    &:focus {
        outline: none;

        &::before {
            background-size: 120% 120%;
        }

        .particle {
            animation: circle 5s infinite linear;

            &::after {
                box-shadow: 0 0 2rem .1rem ${colors.dark};
            }
        }
    }
`;

const Particle = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;

    width: 90%;
    height: 90%;

    border-radius: 100%;

    will-change: transform;

    &::after {
        content: "";
        display: block;
        float: right;
        width: 25%;
        height: 25%;

        background: ${colors.secondary};
        border-radius: 100%;
        box-shadow: none;

        transition: box-shadow .4s;
    }

    @keyframes circle {
        from {
            transform: rotateZ(0deg);
        }

        to {
            transform: rotateZ(360deg);
        }
    }
`;

export const StartButton = () => (
    <StyledButton>
        Start<span>voice enabled</span>
        <Particle className="particle" />
    </StyledButton>
);

export default StartButton;
