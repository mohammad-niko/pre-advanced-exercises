import { createTheme } from "@mui/material";
import { lightBlue, lightGreen, pink } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[400],
    },
    secondary: {
      main: lightBlue[300],
    },
    success:{
        main:lightGreen[400]
    }
  },
});
