import { deepOrange, green, red } from '@material-ui/core/colors';

import CardHeader from '@material-ui/core/CardHeader';
import styled from 'styled-components';
import { theme } from 'theme';

export const RegistryItemHeader = styled(CardHeader)`
  ${({ theme }) => `
    padding-top: ${theme.spacing(1.5)}px;
    padding-bottom: ${theme.spacing(0.25)}px;

    & .title {
      display: flex;
      justify-content: space-between;

      & > * {
        font-family: var(--title-font-family);
        font-size: ${theme.typography.h5.fontSize};
        font-style: var(--title-font-style);
        font-weight: var(--title-font-weight);
      }
    }

    & > * {
      & > * + * {
        margin-top: ${theme.spacing()}px;
      }
    }
  `}
`;

interface IProgressMeterProps {
  progress?: number;
}

export const RegistryItemProgressMeter = styled.div<IProgressMeterProps>`
  display: flex;
  align-items: center;
  background-color: var(--dark-blue);
  border-radius: 20px;
  padding: ${theme.spacing()}px ${theme.spacing(2)}px;
  position: relative;

  &:after {
    background-color: ${({ progress }) => {
      if (progress < 50) {
        return red[500];
      } else if (progress < 75) {
        return deepOrange[500];
      }

      return green[500];
    }};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: ${({ progress }) => (progress >= 90 ? `20px` : 0)};
    border-bottom-right-radius: ${({ progress }) =>
      progress >= 90 ? `20px` : 0};
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${({ progress }) => `${progress < 6 ? 0 : progress}%`};
  }

  & > * {
    color: ${theme.palette.grey[200]};
    font-family: var(--title-font);
    position: relative;
    z-index: 1;
  }
`;
