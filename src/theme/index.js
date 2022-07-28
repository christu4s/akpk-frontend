import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00aeef",
      light: "#3bafef",
    },
    secondary: {
      main: "#173760",
      light: "#2269b2",
    },
    info: {
      main: "#667085",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h2: {
      color: "#101828",
      fontSize: "36px",
      textAlign: "center",
    },
    h3: {
      fontSize: "24px",
    },
    h4: {
      fontSize: "14px",
      color: "#000",
    },
    h5: {
      fontSize: "18px",
    },
    body1: {
      color: "#667085",
      fontSize: "16px ",
      textAlign: "center",
    },
    subtitle1: {
      fontSize: "14px",
      color: "#344054",
    },
    subtitle2: {
      fontSize: "12px",
      color: "#92929D",
    },
  },
});

export default theme;
