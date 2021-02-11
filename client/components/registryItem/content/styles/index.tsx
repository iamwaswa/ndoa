import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { theme } from 'theme';

export const RegistryItemContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: ${theme.spacing(2)}px;
  padding-bottom: ${theme.spacing()}px;

  & .content {
    flex-grow: 1;

    & > * + * {
      margin-top: ${theme.spacing(2)}px;
    }
  }

  &:last-child {
    padding-bottom: ${theme.spacing()}px;
  }

  & > p {
    margin-top: ${theme.spacing(2)}px;
  }
`;
