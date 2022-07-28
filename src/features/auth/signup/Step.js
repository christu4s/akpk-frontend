import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import CardWrapper from "../../../components/Card";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";

const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 16,
    color: "#FFF !important",
  },
  buttonOutlined: {
    fontSize: 16,
  },
}));

export default function SignUpStep() {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useNavigate();
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <Header />

        <Grid item xs={12}>
          <Button
            className={classes.buttonContained}
            fullWidth
            variant="contained"
            onClick={() => history("/email-signup")}
          >
            {t("login.email")}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.buttonOutlined}
            fullWidth
            variant="outlined"
            onClick={() => history("/phone-signup")}
          >
            {t("login.phone")}
          </Button>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}
