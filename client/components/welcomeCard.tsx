import { useMediaQuery, useTheme } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FunctionType } from 'types';

interface IWelcomeCardProps {
  show: boolean;
  title: string;
  onClose: FunctionType<unknown, void>;
}

export function WelcomeCard({
  show,
  title,
  onClose,
}: IWelcomeCardProps): JSX.Element {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down(`xs`));

  return (
    <Dialog open={show} fullScreen={mobile} maxWidth="sm" onClose={onClose}>
      <DialogTitle>Hello {title}!</DialogTitle>
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
