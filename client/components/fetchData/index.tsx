import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { FunctionType } from 'types';
import Typography from '@material-ui/core/Typography';
import { theme } from 'theme';

const LoaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: ${theme.spacing()}px;
  }
`;

const animateIn = keyframes`
  from {
    opacity: 0.2;
    transform: translateY(25px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface IContentContainerProps {
  animate: boolean;
}

const ContentContainer = styled.section<IContentContainerProps>`
  animation-name: ${({ animate }) => (animate ? animateIn : ``)};
  animation-direction: normal;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;

const Text = styled(Typography)`
  font-size: ${theme.typography.h5.fontSize};
`;

interface IFetchDataProps<TData, TError> {
  data: TData;
  error: TError;
  loading: boolean;
  loadingText: string;
  renderData: FunctionType<[TData], JSX.Element>;
  renderError: FunctionType<[TError], JSX.Element>;
}

export function FetchData<TData, TError>({
  data,
  error,
  loading,
  loadingText,
  renderData,
  renderError,
}: IFetchDataProps<TData, TError>): JSX.Element | null {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect((): FunctionType<void, void> => {
    let timeout: NodeJS.Timeout;

    if (loading) {
      timeout = setTimeout(() => {
        setShowLoader(true);
      }, 250);
    } else {
      setShowLoader(false);
    }

    return (): void => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [loading]);

  if (loading && !showLoader) {
    return null;
  }

  if (showLoader) {
    return (
      <LoaderContainer>
        <CircularProgress color="secondary" />
        <Text>{loadingText}</Text>
      </LoaderContainer>
    );
  }

  if (error) {
    renderError(error);
  }

  return <ContentContainer animate={true}>{renderData(data)}</ContentContainer>;
}
