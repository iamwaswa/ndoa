import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { showedWelcomeCardKey } from '@constants';
import { useWelcomeCardName } from './hooks/welcomeCardName';

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

  const onClose = useCallback((): void => {
    if (typeof window !== `undefined`) {
      localStorage.setItem(showedWelcomeCardKey, `true`);
    }

    setShow(false);
  }, []);

  return (
    <Dialog open={show} fullScreen={mobile} maxWidth="sm" onClose={onClose}>
      <DialogTitle>Hello {name}!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ut
          consequatur repudiandae sed repellendus nesciunt amet quisquam natus
          soluta libero. Magni aperiam enim obcaecati unde sed accusamus
          exercitationem illum laudantium.
        </DialogContentText>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ut
          consequatur repudiandae sed repellendus nesciunt amet quisquam natus
          soluta libero. Magni aperiam enim obcaecati unde sed accusamus
          exercitationem illum laudantium.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
