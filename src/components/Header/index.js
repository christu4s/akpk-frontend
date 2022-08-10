import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  image: {
    textAlign: "center",
  },
}));

export default function Header(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.image}>
        <img
          alt="logo"
          src={require("../../assets/AKPK_logo.svg").default}
          width="160px"
          height="75px"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">{props.title || t("login.login")}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{props.subtitle || t("login.information")}</Typography>
      </Grid>
    </>
  );
}
