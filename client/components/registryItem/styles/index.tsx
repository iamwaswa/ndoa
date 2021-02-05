import Fab, { FabProps } from '@material-ui/core/Fab';
import { green, red, yellow } from '@material-ui/core/colors';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { ComponentType } from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

export const RegistryItemContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 300px;
  padding: ${theme.spacing()}px;

  & :first-child {
    flex-grow: 1;
  }
`;

export const RegistryItemHeader = styled(CardHeader)`
  padding-top: ${theme.spacing(1.5)}px;
  padding-bottom: ${theme.spacing(0.25)}px;

  & .title {
    display: flex;
    justify-content: space-between;
  }

  & > * {
    & > * + * {
      margin-top: ${theme.spacing()}px;
    }
  }
`;

interface IProgressMeterProps {
  progress?: number;
}

export const ProgressMeter = styled.div<IProgressMeterProps>`
  display: flex;
  align-items: center;
  background-color: ${theme.palette.grey[200]};
  border-radius: 20px;
  padding: ${theme.spacing()}px ${theme.spacing(2)}px;
  position: relative;

  &:after {
    background-color: ${({ progress }) => {
      if (progress < 50) {
        return red[500];
      } else if (progress < 75) {
        return yellow[500];
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
    width: ${({ progress }) => `${progress}%`};
  }

  & > * {
    color: ${theme.palette.grey[900]};
    position: relative;
    z-index: 1;
  }
`;

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

export const RegistryItemAction = styled(CardActions)`
  padding: 0 ${theme.spacing(3)}px ${theme.spacing(2)}px;

  & > * {
    font-size: ${theme.typography.h6.fontSize};
    text-transform: initial;
  }
`;

interface IRegistryItemLinkProps extends FabProps {
  rel: string;
  target: string;
}

export const RegistryItemLink = styled<ComponentType<IRegistryItemLinkProps>>(
  Fab
)``;
