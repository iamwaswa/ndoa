import Typography, { TypographyProps } from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import { FC } from 'react';
import Link from 'next/link';
import { routes } from './routes';
import styled from 'styled-components';
import { theme } from 'theme';
import { useRouter } from 'next/router';

const NavBar = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: ${theme.spacing(2)}px;
  width: 100%;
`;

interface INavBarLinkProps extends TypographyProps {
  current: boolean;
}

const NavBarLink = styled<FC<INavBarLinkProps>>(Typography)`
  color: ${({ current }) => (current ? `var(--brand)` : `initial`)};
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    border-bottom: 3px solid var(--brand);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 300ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &:focus:after {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover:after {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface INavigationProps {
  mobile: boolean;
}

export function Navigation({ mobile }: INavigationProps): JSX.Element {
  const { pathname } = useRouter();

  return (
    <NavBar>
      {routes.map(({ href, text }) => (
        <Link key={text} href={href}>
          <NavBarLink current={href === pathname}>{text}</NavBarLink>
        </Link>
      ))}
    </NavBar>
  );
}
