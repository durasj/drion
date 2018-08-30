import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import colors from './colors';

interface Props {
    name: string;
    to: string;
    icon: string;
}

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;

    color: ${colors.chrome};
    text-decoration: none;

    transition: color .2s;

    -webkit-tap-highlight-color: transparent;

    span.icon {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 auto;
        margin-bottom: .25rem;

        mask: url("${(p: Props) => p.icon }") no-repeat center / contain;
        background: ${colors.chrome};

        &::before {
            content: "";
            position: absolute;

            width: 1.5rem;
            height: 1.5rem;

            background:
                ${colors.primary}
                linear-gradient(to right top, ${colors.secondary}, ${colors.primary});
            opacity: 0;

            transition: opacity .2s;
        }
    }

    &:hover,
    &:focus,
    &.active {
        color: ${colors.primary};

        span.icon::before {
            opacity: 1;
        }
    }
`;

const TabLink = ({ name, to, icon }: Props) => (
    <StyledNavLink
        name={name}
        to={to}
        icon={icon}
        activeClassName="active"
        exact={true}
    >
        <span className="icon"></span>{name}
    </StyledNavLink>
);

export default TabLink;
