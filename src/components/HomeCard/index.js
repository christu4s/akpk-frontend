import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "linear-gradient(to bottom, #fff, #000)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "100px  25px 19px",
    borderRadius: 15,
  },
  title: {
    textAlign: "left",
    fontSize: "24px !important",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "6px !important",
  },
  body: {
    fontSize: "16px !important",
    color: "#fff !important",
    marginBottom: "14px !important",
  },
  button: {
    color: "#fff",
    fontSize: 14,
    padding: "7px 22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 8,
  },
}));

export default function HomeCard({ title, body, img, color, url }) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      className={classes.cardContainer}
      style={{
        backgroundImage: ` linear-gradient(to bottom, rgba(0,0,0, .6), rgba(0,0,0, .6)), url(${require(`../../assets/${img}.png`)})`,
      }}
    >
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle2" className={classes.body}>
        {body}
      </Typography>
      <Box
        className={classes.button}
        style={{ backgroundColor: `${color}` }}
        onClick={() => navigate(url)}
      >
        View More
      </Box>
    </Box>
  );
}
