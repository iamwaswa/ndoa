import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { theme } from 'theme';

export const LayoutContainer = styled(Box)`
  color: var(--gold);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const LayoutHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex-grow: 0;
  padding: ${theme.spacing()}px ${theme.spacing()}px;
`;

export const LayoutMiddleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${theme.spacing()}px 0;
`;

export const LayoutContent = styled(Box)`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  margin: ${theme.spacing()}px auto 0;
  max-width: var(--max-width);
  width: 100%;
`;
