import { Button, Grid, Typography } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: "6px !important",
    color: "#344054 !important",
  },
  button: {
    color: "#FFF !important",
    fontSize: "16px !important",
    padding: "13px 0 !important",
    width: "60% !important",
    alignSelf: "center !important",
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
export default function SecondStep({ id, setId }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Select Services</Typography>
        <Typography lassName={classes.subtitle}>
          please select your desired services
        </Typography>
      </Grid>
      <Grid xs={12} item container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.button} variant="contained" onClick={setId}>
          Done
        </Button>
      </Grid>
    </Grid>
  );
}
