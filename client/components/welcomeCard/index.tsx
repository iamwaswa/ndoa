import styled, { css } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Image from 'next/image';
import { showedWelcomeCardKey } from '@constants';
import { useWelcomeCardName } from './hooks/welcomeCardName';

const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: var(--dark-blue);
    border: 20px solid var(--gold);
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: center;
  padding-bottom: 0;
`;

interface IStyledDialogContentTextProps {
  styledFont?: boolean;
}

const StyledDialogContentText = styled(
  DialogContentText
)<IStyledDialogContentTextProps>`
  ${({ styledFont, theme }) => css`
    color: var(--gold);
    font-display: ${styledFont
      ? `var(--title-font-display)`
      : `var(--base-font-display)`};
    font-family: ${styledFont
      ? `var(--title-font-family)`
      : `var(--base-font-family)`};
    font-size: ${styledFont
      ? theme.typography.h4.fontSize
      : theme.typography.h5.fontSize};
    font-style: ${styledFont
      ? `var(--title-font-style)`
      : `var(--base-font-style)`};
    font-weight: ${styledFont
      ? `var(--title-font-weight)`
      : `var(--base-font-weight)`};
    margin: ${theme.spacing(0, 0, 2, 0)};
    text-align: center;
  `}
`;

const StyledDialogActions = styled(DialogActions)`
  ${({ theme }) => css`
    padding: ${theme.spacing(2, 0)};
    text-align: center;
    display: flex;
    justify-content: center;

    & > * {
      font-size: ${theme.typography.h6.fontSize};
      text-transform: initial;
    }
  `}
`;

const StyledFab = styled(Fab)`
  ${({ theme }) => css`
    background-color: var(--gold);
    border-radius: ${theme.spacing(3)}px;
    color: var(--dark-blue);
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-size: ${theme.typography.h6.fontSize};
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    padding: ${theme.spacing(0, 2)};
    text-transform: initial;
  `}
`;

export function WelcomeCard(): JSX.Element {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down(`xs`));

  const name = useWelcomeCardName();

  const [show, setShow] = useState<boolean>(false);

  useEffect((): void => {
    if (name) {
      setShow(true);
    }
  }, [name]);

  const handleClose = useCallback((): void => {
    if (typeof window !== `undefined`) {
      localStorage.setItem(showedWelcomeCardKey, `true`);
    }

    setShow(false);
  }, []);

  return (
    <StyledDialog open={show} fullScreen={mobile} maxWidth="sm">
      <StyledDialogTitle>
        <Image height={60} width={60} src="/logo.svg" />
      </StyledDialogTitle>
      <DialogContent>
        <StyledDialogContentText styledFont={true}>
          {name}
        </StyledDialogContentText>
        <StyledDialogContentText>
          It&apos;s finally happening! After 4 years of patiently (almost
          patiently) waiting we have finally come to the moment where we will
          pursue our vocations.
        </StyledDialogContentText>
        <StyledDialogContentText>
          We would like to invite you to join in watching the live stream of our
          wedding.
        </StyledDialogContentText>
        <StyledDialogContentText>
          April 24th 2021 at 11:00am PST
        </StyledDialogContentText>
      </DialogContent>
      <StyledDialogActions>
        <StyledFab color="secondary" variant="extended" onClick={handleClose}>
          Proceed to Website
        </StyledFab>
      </StyledDialogActions>
    </StyledDialog>
  );
}
