import { ChildrenProps } from 'types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

const LoaderContainer = styled.section`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${theme.spacing()}px;
  }
`;

interface ILoaderProps extends ChildrenProps {
  loading: boolean;
  loadingText: string;
}

export function Loader({
  children,
  loading,
  loadingText,
}: ILoaderProps): JSX.Element {
  return loading ? (
    <LoaderContainer>
      <CircularProgress />
      <Typography>{loadingText}</Typography>
    </LoaderContainer>
  ) : (
    <Grow in={true}>
      <>{children}</>
    </Grow>
  );
}
