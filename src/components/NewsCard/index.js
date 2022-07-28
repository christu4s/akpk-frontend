import { Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { makeStyles } from "@mui/styles";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: 18,
    borderRadius: 12,
    // border: "1px solid #000",
    backgroundColor: "#fff",
    // display,
    marginBottom: "10px",
  },
  imgContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  bookmark: {
    position: "absolute",
    right: 16,
    top: 16,
    padding: "12px",
    paddingLeft: "calc(12px - 23.984px + 27.734px)",
    paddingRight: "calc(12px - 23.984px + 27.734px)",
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  title: {
    fontSize: "16px !important",
    color: "#183B56 !important",
    textAlign: "left !important",
    fontWeight: "bold !important",
    marginBottom: "10px !important",
  },
  more: {
    fontSize: "14px !important",
    color: "#00AEEF !important",
    fontWeight: "bolder !important",
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    fontSize: "14px !important",
    marginLeft: "5px",
  },
}));

export default function NewsCard({ title, img }) {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.imgContainer}>
        <img
          src={require(`../../assets/${img}.png`)}
          width="100%"
          height="80%"
        />
        <Box className={classes.bookmark}>
          <BookmarkIcon />
        </Box>
      </Box>
      <Box>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.more}>
          Read More
          <ArrowForwardIcon className={classes.arrow} />
        </Typography>
      </Box>
    </Box>
  );
}
