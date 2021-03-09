import styled, { css } from 'styled-components';

import { AnchorStyles } from 'styles/anchor';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';

export const NavBar = styled(AppBar)`
  ${({ theme }) => css`
    background-color: inherit;
    box-shadow: none;
    max-width: var(--max-width);
    padding: ${theme.spacing(2, 2, 0)};

    & div.MuiButtonBase-root.MuiTabScrollButton-root.MuiTabs-scrollButtons {
      color: var(--gold);
    }

    & .MuiTabs-indicator {
      display: none;
    }

    & div.MuiTabs-flexContainer {
      margin: 0 auto;
      width: fit-content;

      & > * + * {
        margin-left: ${theme.spacing(1)}px;
      }
    }
  `}
`;

interface INavBarTabProps {
  current: boolean;
}

export const NavBarTab = styled(Tab)<INavBarTabProps>`
  ${AnchorStyles}

  ${({ current, theme }) => css`
    color: ${current ? theme.palette.grey[100] : `var(--gold)`};
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    font-size: ${theme.typography.h6.fontSize};
    min-width: fit-content;
    opacity: 1;
    padding: ${theme.spacing(0, 2)};
    text-transform: none;

    ${theme.breakpoints.up(`sm`)} {
      font-size: ${theme.typography.h5.fontSize};
    }
  `}
`;
