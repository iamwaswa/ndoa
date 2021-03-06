import styled, { css } from 'styled-components';

import { Anchor } from 'styles/anchor';
import { AnchorHTMLAttributes } from 'react';
import Box from '@material-ui/core/Box';
import { theme } from 'theme';

export const NavBar = styled(Box)`
  ${({ theme }) => css`
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    display: flex;
    justify-content: center;
    padding: ${theme.spacing(2)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px;
    width: 100%;
    max-width: var(--max-width);

    & > * + * {
      margin-left: ${theme.spacing(2)}px;

      ${theme.breakpoints.up(`sm`)} {
        margin-left: ${theme.spacing(10)}px;
      }
    }
  `}
`;

interface INavBarLinkProps extends AnchorHTMLAttributes<unknown> {
  current: string;
}

export const NavBarAnchor = styled(Anchor)<INavBarLinkProps>`
  color: ${({ current }) => {
    return current === `true` ? theme.palette.grey[100] : `var(--gold)`;
  }};
  font-size: ${theme.typography.h6.fontSize};

  ${theme.breakpoints.up(`sm`)} {
    font-size: ${theme.typography.h5.fontSize};
  }
`;
