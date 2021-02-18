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

  return <section>{renderData(data)}</section>;
}
