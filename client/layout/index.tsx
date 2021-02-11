import {
  LayoutContainer,
  LayoutContent,
  LayoutHeader,
  LayoutMiddleContainer,
} from './styles';

import { ChildrenProps } from 'types';
import { Countdown } from './countdown';
import { Logo } from './logo';
import { Names } from './names';
import { Navigation } from './navigation';
import { WeddingDate } from './weddingDate';
import Fade from '@material-ui/core/Fade';

export function Layout({ children }: ChildrenProps): JSX.Element {
  return (
    <LayoutContainer as="main">
      <Fade in={true}>
        <LayoutHeader as="header">
          <Logo />
          <Names />
          <LayoutMiddleContainer>
            <WeddingDate />
            <Countdown />
          </LayoutMiddleContainer>
          <Navigation />
        </LayoutHeader>
      </Fade>
      <LayoutContent as="section">{children}</LayoutContent>
    </LayoutContainer>
  );
}
