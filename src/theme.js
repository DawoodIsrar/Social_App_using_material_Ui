import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#17660a",
      light: "skyblue",
    },
    secondary: {
      main: "#888",
      light: "#101110",
    },
    otherColor: {
      main: "grey",
      light: "lightgrey",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
