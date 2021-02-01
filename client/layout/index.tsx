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

export function Layout({ children }: ChildrenProps): JSX.Element {
  return (
    <LayoutContainer as="main">
      <LayoutHeader as="header">
        <Logo />
        <Names />
        <LayoutMiddleContainer>
          <WeddingDate />
          <Countdown />
        </LayoutMiddleContainer>
        <Navigation />
      </LayoutHeader>
      <LayoutContent as="section">{children}</LayoutContent>
    </LayoutContainer>
  );
}
