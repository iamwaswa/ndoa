import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: `#212738`,
      },
    },
    typography: {
      fontFamily: `'Abhaya Libre', serif`,
    },
  })
);
