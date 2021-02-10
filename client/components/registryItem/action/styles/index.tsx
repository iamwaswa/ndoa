import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import { theme } from 'theme';

export const RegistryItemAction = styled(CardActions)`
  padding: 0 ${theme.spacing(2)}px ${theme.spacing(2)}px;

  & > * {
    background-color: var(--dark-blue);
    color: var(--gold);
    font-size: ${theme.typography.h6.fontSize};
    text-transform: initial;
  }
`;

export const RegistryItemButton = styled(Fab)`
  font-family: var(--title-font);
`;
