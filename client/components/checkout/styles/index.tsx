import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { theme } from 'theme';

export const CheckoutContainer = styled(Dialog)``;

export const CheckoutTitle = styled(DialogTitle)`
  padding-bottom: 0;
`;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CheckoutFieldset = styled.fieldset`
  border: none;
  flex-grow: 1;
  margin: 0;
  padding: 0;
`;

export const CheckoutContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding-bottom: ${theme.spacing(4)}px;

  & > * + * {
    margin-top: ${theme.spacing(2)}px;
  }
`;

export const CheckoutActions = styled(DialogActions)`
  display: flex;
  justify-content: flex-end;
  padding: ${theme.spacing(2)}px;
`;

export const CheckoutActionButton = styled(Button)`
  font-size: ${theme.typography.body1.fontSize};
  text-transform: initial;
`;

export const Row = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: ${theme.spacing(2)}px;

  ${theme.breakpoints.up(`sm`)} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;
