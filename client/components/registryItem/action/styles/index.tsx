import Fab, { FabProps } from '@material-ui/core/Fab';

import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';

export const RegistryItemAction = styled(CardActions)`
  ${({ theme }) => `
    padding: 0 ${theme.spacing(2)}px ${theme.spacing(2)}px;
  `}
`;

interface IRegistryItemButtonProps extends FabProps {
  invert?: boolean;
}

export const RegistryItemButton = styled(Fab)<IRegistryItemButtonProps>`
  ${({ invert = false, theme }) => `
    background-color: ${invert ? `var(--gold)` : `var(--dark-blue)`};
    color: ${invert ? `var(--dark-blue)` : `var(--gold)`};
    font-size: ${theme.typography.h6.fontSize};
    text-transform: initial;
    font-family: var(--title-font);
  `}
`;
