import { Box, Card, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 30,
  },

  iconContainer: {
    backgroundColor: "#E5F7FE",
    borderRadius: 20,
    marginBottom: 33,

    width: "max-content",
  },

  icon: {
    margin: 16,
    width: 24,
    height: 24,
  },
  text: {
    fontSize: "16px !important",
    color: "#696974 !important",
    textAlign: "left !important ",
    marginBottom: "16px !important",
  },
  title: {
    fontSize: "14px !important",
    color: "#171725 !important",
    textAlign: "left !important ",
    fontWeight: "bold",
  },
}));

export default function DebtCard({ icon, title, text }) {
  const classes = useStyles();
  return (
    <Card elevation={1}>
      <Box className={classes.container}>
        <Grid conatainer spacing={2}>
          <Box className={classes.iconContainer}>
            <img
              src={require(`../../assets/icons/${icon}.svg`)}
              className={classes.icon}
            />
          </Box>

          <Grid item xs={12}>
            <Typography className={classes.text}>{text}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.title}>{title}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
