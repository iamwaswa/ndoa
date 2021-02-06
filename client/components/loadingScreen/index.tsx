import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

import { FunctionType } from 'types';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import { theme } from 'theme';

interface IAnimatedContainerProps {
  hide: boolean;
}

const AnimatedContainer = styled.div<IAnimatedContainerProps>`
  background-color: ${theme.palette.grey[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: ${({ hide }) => (hide ? `translateY(-100%)` : `translateY(0)`)};
  transition: transform 300ms ease-in-out;
  z-index: ${theme.zIndex.modal};
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: ${theme.spacing()}px;
  }
`;

const throb = keyframes`
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1.1);
  }
`;

const ContentImageContainer = styled.div`
  animation-name: ${throb};
  animation-direction: alternate;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  height: 80px;
  width: 80px;
`;

const ContentText = styled(Typography)`
  font-size: ${theme.typography.h3.fontSize};
`;

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
