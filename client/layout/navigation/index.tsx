import { Nav, Text, TextProps } from 'grommet';

import { FC } from 'react';
import Link from 'next/link';
import { routes } from './routes';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavBar = styled(Nav)`
  width: 100%;
`;

type BaseTextProps = TextProps & Omit<JSX.IntrinsicElements['span'], 'color'>;

interface INavBarLinkProps extends BaseTextProps {
  current: boolean;
}

const NavBarLink = styled<FC<INavBarLinkProps>>(Text)`
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
    <NavBar
      direction="row"
      justify="center"
      gap={mobile ? `large` : `xlarge`}
      pad={{ top: `large` }}
    >
      {routes.map(({ href, text }) => (
        <Link key={text} href={href}>
          <NavBarLink
            current={href === pathname}
            size={mobile ? `medium` : `large`}
          >
            {text}
          </NavBarLink>
        </Link>
      ))}
    </NavBar>
  );
}
