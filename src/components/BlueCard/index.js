import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    // backgroundColor: "#2269B3",
    borderRadius: 20,
    padding: "100px 40px 60px 34px",
  },
  title: {
    color: "#FFF !important",
    fontSize: "28px !important",
    fontWeight: "bolder !important",
    textAlign: "left ",
    marginBottom: "13px !important",
  },
  subtitle: {
    color: "#FFF !important",
    fontSize: "16px !important",
  },
  containdButton: {
    padding: "13px 0 !important",
    color: "#FFF !important",
    cursor: "pointer",
  },
  outlinedButton: {
    padding: "13px 0 !important",
    border: "1px solid #fff !important",
    color: "#FFF !important",
    cursor: "pointer",
  },
}));
export default function BlueCard({
  title,
  image,
  text,
  color,
  connected,
  handleConnect,
  handleDisonnect,
}) {
  const classes = useStyles();

  return (
    <Box
      className={classes.cardContainer}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${color}, ${color} ) ,url(${require(`../../assets/${image}.png`)}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={7} xl={7}>
          <Typography textAlign="left" className={classes.title}>
            {title}
          </Typography>
          <Typography textAlign="left" className={classes.subtitle}>
            {text}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={5}
          lg={5}
          xl={5}
          spacing={2}
          alignItems="flex-end"
        >
          <Grid item xs={12} md={12} lg={6} xl={6}>
            {connected ? (
              <Button
                fullWidth
                disableElevation
                variant="outlined"
                className={classes.outlinedButton}
                onClick={handleDisonnect}
              >
                Disconnect
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                className={classes.containdButton}
                disableElevation
                onClick={handleConnect}
                style={{marginLeft: "225px"}}
              >
                Connect
              </Button>
            )}
          </Grid>
          {/* <Grid item xs={12} md={12} lg={6} xl={6}>
            <Button
              fullWidth
              disableElevation
              variant="outlined"
              className={classes.outlinedButton}
            >
              Disconnect
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
}
