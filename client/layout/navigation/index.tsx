import { NavBar, NavBarTab } from './styles';

import { FunctionType } from 'types';
import Tabs from '@material-ui/core/Tabs';
import { routes } from './routes';
import { useRouter } from 'next/router';

export function Navigation(): JSX.Element {
  const router = useRouter();

  function handleTabClick(href: string): FunctionType<unknown, void> {
    return (): void => {
      router.push(href);
    };
  }

  return (
    <NavBar position="static" color="default">
      <Tabs
        value={router.pathname}
        variant="scrollable"
        scrollButtons="on"
        aria-label="Scrollable navigation tabs"
      >
        {routes.map(({ href, text }, index) => (
          <NavBarTab
            key={text}
            current={href === router.pathname}
            label={text}
            value={href}
            onClick={handleTabClick(href)}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </NavBar>
  );
}

function a11yProps(index: number): Record<'id' | 'aria-controls', string> {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
