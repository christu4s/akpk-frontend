import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    marginBottom: 25,
  },
  button: {
    color: "#FFF !important",
    fontSize: "16px !important",
    padding: "13px 120px !important",
    width: "100% !important",
  },
  title: {
    color: "#101828 !important",
    // textAlign: "left !important",
    fontSize: "28px !important",
    fontWeight: "bold !important",
  },
  subtitle: {
    color: "#667085 !important",
    // textAlign: "left !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
}));

export default function ThirdStep({ id, setId }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.margin} classes={{ width: "100%" }}>
        <img src={require("../../assets/done.png")} />
      </Box>
      <Box className={classes.margin}>
        <Typography className={classes.title}>Thank you!</Typography>
      </Box>
      <Box className={classes.margin}>
        <Typography className={classes.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={setId}
          className={classes.button}
          variant="contained"
          fullWidth
        >
          Go to Dashboard
        </Button>
      </Box>
    </Box>
  );
}
