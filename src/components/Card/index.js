import React from "react";
import Card from "@mui/material/Card";
import makeStyles from "@mui/styles/makeStyles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    //padding: " 52px 52px !important",
    border: "1px solid #D0D5DD !important",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: " 52px 52px",
  },
  boxContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CardWrapper({ children, ...otherProps }) {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Card
        sx={{ width: 500 }}
        variant="elevation"
        className={classes.cardContainer}
        {...otherProps}
      >
        <Box className={classes.box}>{children}</Box>
      </Card>
    </Box>
  );
}
