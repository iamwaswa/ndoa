import {
  LayoutContainer,
  LayoutContent,
  LayoutHeader,
  LayoutMiddleContainer,
} from './styles';

import { ChildrenProps } from 'types';
import { Countdown } from './countdown';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import { Logo } from './logo';
import { Names } from './names';
import { Navigation } from './navigation';
import { WeddingDate } from './weddingDate';
import { useRouter } from 'next/router';

export function Layout({ children }: ChildrenProps): JSX.Element {
  const router = useRouter();

  return (
    <LayoutContainer as="main">
      <Grow in={true}>
        <LayoutHeader as="header">
          <Logo />
          <Names />
          <LayoutMiddleContainer>
            <WeddingDate />
            <Countdown />
          </LayoutMiddleContainer>
          <Navigation />
        </LayoutHeader>
      </Grow>
      <Fade key={router.asPath} in={true} timeout={500}>
        <LayoutContent as="section">{children}</LayoutContent>
      </Fade>
    </LayoutContainer>
  );
}
