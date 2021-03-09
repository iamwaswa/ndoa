import Fab, { FabProps } from '@material-ui/core/Fab';
import styled, { css } from 'styled-components';

import CardActions from '@material-ui/core/CardActions';

export const RegistryItemAction = styled(CardActions)`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(2)}px ${theme.spacing(2)}px;
  `}
`;

interface IRegistryItemButtonProps extends FabProps {
  invert?: boolean;
}

export const RegistryItemButton = styled(Fab)<IRegistryItemButtonProps>`
  ${({ invert = false, theme }) => css`
    background-color: ${invert ? `var(--gold)` : `var(--dark-blue)`};
    border-radius: ${theme.spacing(3)}px;
    color: ${invert ? `var(--dark-blue)` : `var(--gold)`};
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-size: ${theme.typography.h6.fontSize};
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    padding: ${theme.spacing(0, 2)};
    text-transform: initial;
  `}
`;
