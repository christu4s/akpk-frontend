import { Typography, Grid, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 16,
    backgroundColor: "#fff",
    padding: "20px 25px",
  },
  rm1: {
    backgroundColor: "#E5F7FE !important",
    width: "fit-content",
    padding: "5px !important",
    borderRadius: "8px",
    color: "#00AEEF !important",
  },
  rm2: {
    width: "fit-content",
    color: "#171725 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    fontWeight: "bold !important",
    fontSize: "28px!important",
  },

  icon: {
    color: "#3DD598 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px !important",

    fontWeight: "bold !important",
  },
  rm3: {
    width: "fit-content",
    color: "#696974 !important",
    fontWeight: "bold !important",
    fontSize: "14px !important",
  },
}));

export default function ChartCard() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.rm1}>RM</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.rm2}>
            RM 14,612
            <Typography className={classes.icon}>
              +2.5% <ArrowUpwardIcon />
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.rm3}>
            Compared to ($21340 last year)
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
