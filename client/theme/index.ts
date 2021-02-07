import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: `#98bcdd`,
      },
    },
    typography: {
      fontFamily: `'Abhaya Libre', serif`,
    },
  })
);
