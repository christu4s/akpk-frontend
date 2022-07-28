import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import StarIcon from "@mui/icons-material/Star";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "18px !important",
    color: "#171725 !important",
  },
  arrowIcon: {
    color: "#0062FF",
    fontSize: "14px !important",
    marginLeft: "25px",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "flex-starrt",
    alignItems: "center",
  },
  watchIcon: {
    color: "#00AEEF !important",
    marginRight: "5px",
  },
  starIcon: {
    color: "#FF953F !important",
    marginRight: "5px",
  },
  peopleIcon: {
    color: "#585858 !important",
    marginRight: "5px",
    fontSize: "14px !important",
  },
  imgContainer: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export default function ParticipationCard() {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.imgContainer}>
          <img src={require("../../assets/participation/1.png")} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>
            Getting Started
            <ArrowForwardIosIcon className={classes.arrowIcon} />
          </Typography>
        </Grid>
        <Grid item xs={5} justifyContent="flex-start">
          <Typography className={classes.iconWrapper}>
            <WatchLaterIcon className={classes.watchIcon} />
            5h 30 min
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5} justifyContent="flex-end">
          <Typography>79 Lectures</Typography>
        </Grid>
        <Grid item xs={8} justifyContent="flex-start" alignContent="flex-start">
          <Typography className={classes.iconWrapper}>
            <StarIcon className={classes.starIcon} /> 4.9 (322 Reviews)
          </Typography>
        </Grid>
        <Grid item xs={4} justifyContent="flex-end">
          <Typography className={classes.iconWrapper}>
            <PeopleAltIcon className={classes.peopleIcon} /> 1.2K
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
