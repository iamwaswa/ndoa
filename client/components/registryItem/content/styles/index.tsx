import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { theme } from 'theme';

export const RegistryItemContent = styled(CardContent)`
  padding-top: ${theme.spacing()}px;
  padding-bottom: ${theme.spacing()}px;

  &:last-child {
    padding-bottom: ${theme.spacing()}px;
  }

  & > p {
    margin-top: ${theme.spacing(2)}px;
  }
`;

export const RegistryItemContribute = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: ${theme.spacing()}px;
  margin: 0;
  padding: 0;
`;
