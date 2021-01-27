import { Nav, Text } from 'grommet';

import Link from 'next/link';
import { routes } from './routes';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavBar = styled(Nav)`
  width: 100%;
`;

const NavBarLink = styled(Text)`
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

export function Navigation({ mobile }) {
  const { pathname } = useRouter();

  return (
    <NavBar
      direction="row"
      justify="center"
      gap={mobile ? `large` : `xlarge`}
      pad={{ top: `medium` }}
    >
      {routes.map(({ href, text }) => (
        <Link key={text} href={href}>
          <NavBarLink
            current={href === pathname}
            size={mobile ? `medium` : `large`}
            tabIndex="0"
          >
            {text}
          </NavBarLink>
        </Link>
      ))}
    </NavBar>
  );
}
