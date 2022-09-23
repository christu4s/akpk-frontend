import { Button, Grid, Typography } from "@mui/material";
import React,{useEffect} from "react";
import CardWrapper from "../../../components/Card";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import {useAuth} from '../../../components/Auth';
const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 16,
    color: "#FFF !important",
  },
  buttonOutlined: {
    fontSize: 16,
  },
}));

export default function Login() {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if(auth.token){
      history('/home');
    }
  }, [auth.token]);

  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <Header />
        <Grid item xs={12}>
          <Button
            className={classes.buttonContained}
            fullWidth
            variant="contained"
            onClick={() => history("/signup-method")}
          >
            {t("login.newUser")}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.buttonOutlined}
            fullWidth
            variant="outlined"
            onClick={() => history("/email-login")}
          >
            {t("login.oldUser")}
          </Button>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}
