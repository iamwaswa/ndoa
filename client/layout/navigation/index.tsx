import { NavBar, NavBarAnchor } from './styles';

import Link from 'next/link';
import { routes } from './routes';
import { useRouter } from 'next/router';

export function Navigation(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <NavBar>
      {routes.map(({ href, text }) => (
        <Link key={text} href={href}>
          <NavBarAnchor current={String(href === pathname)} href={href}>
            {text}
          </NavBarAnchor>
        </Link>
      ))}
    </NavBar>
  );
}
