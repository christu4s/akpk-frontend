import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#173760",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    // position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    padding: "10px 0px",
  },

  text: {
    color: "#FFF !important",
    fontSize: "14px !important",
    fontWeight: "bold !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px !important",
      fontWeight: "400 !important",
    },
    cursor: "pointer",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footerContainer}>
      <Typography className={classes.text}>
        &copy;2021 AKPK. All Rights Reserved.
      </Typography>
      <Typography className={classes.text}>Terms of Service</Typography>
      <Typography className={classes.text}>Privacy Policy</Typography>
    </Box>
  );
}
