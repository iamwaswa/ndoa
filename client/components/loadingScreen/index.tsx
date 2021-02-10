import {
  AnimatedContainer,
  Content,
  ContentImageContainer,
  ContentText,
} from './styles';
import { useEffect, useState } from 'react';

import { FunctionType } from 'types';
import Image from 'next/image';

export function LoadingScreen(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect((): FunctionType<void, void> => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return (): void => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatedContainer hide={loaded}>
      <Content>
        <ContentImageContainer>
          <Image layout="fill" src="/logo.svg" />
        </ContentImageContainer>
        <ContentText>Getting things ready...</ContentText>
      </Content>
    </AnimatedContainer>
  );
}
