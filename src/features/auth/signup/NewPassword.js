import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CardWrapper from "../../../components/Card";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AlertValidation from "../../../components/AlertValidation";
import PasswordChecklist from "react-password-checklist"

const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 16,
    color: "#FFF !important",
  },
  inputLabel: {
    textAlign: "left",
    marginBottom: 7,
  },
  checkbox: {
    color: "#D0D5DD",
    textAlign: "left",
  },
  input: {
    borderColor: "#D0D5DD !important",
  },
  form: {
    width: "100%",
  },
}));

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password Must be a minumum of 6 caracters"),
  c_password: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function PhoneSignUp() {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const {state} = useLocation();
  const redirectPath = state ? '/home': '/';
  const [errorResponse, setErrorResponse] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const signupType =
    state.result.login_via === "email"
      ? { email: state.result.user?.email }
      : { contact_number: state.result.user?.contact_number };
  
  const config = {
    headers: { Authorization: `Bearer ${state.result.token}` }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      c_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(`update_password`,
        {
          password: formik.values.password,
          c_password: formik.values.c_password,
          ...signupType,
        },config)
        .then((result) => {
          if(result.data.status && result.data.message === 'success') {
            navigate(redirectPath,{state:{result:state.result}});
          } else {
            setErrorResponse(result.data.message);
            return handleOpen();
          }
        }).catch((err) => {
            setErrorResponse(err.response.data.message);
            return handleOpen();
        });
    },
  });

  const redirectURL = () => {
    formik.values.password = '';
    formik.values.c_password = '';
    setOpen(false);
  }

  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Header
            title={t("password.update_password")}
            subtitle={t("password.update_password_information")}
          />
          <Grid item padding={2} xs={12}>
            <Typography className={classes.inputLabel} variant="subtitle1">
              {t("password.input_password")}
            </Typography>
            <TextField
              className={classes.input}
              id="password"
              name="password"
              type="password"
              placeholder="Use a min of 6 characters"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item padding={2} xs={12}>
            <Typography className={classes.inputLabel} variant="subtitle1">
              {t("password.input_c_password")}
            </Typography>
            <TextField
              className={classes.input}
              id="c_password"
              name="c_password"
              type="password"
              placeholder="Use a min of 6 characters"
              value={formik.values.c_password}
              onChange={formik.handleChange}
              error={
                formik.touched.c_password && Boolean(formik.errors.c_password)
              }
              helperText={formik.touched.c_password && formik.errors.c_password}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <PasswordChecklist
            rules={["minLength","specialChar","number","capital","match"]}
            minLength={5}
            value={formik.values.password}
            valueAgain={formik.values.c_password}
            onChange={(isValid) => {}}
          />

          <Grid item padding={2} xs={12}>
            <Button
              className={classes.buttonContained}
              fullWidth
              variant="contained"
              type="submit"
            >
              {t("password.button_password")}
            </Button>
          </Grid>
        </form>
        <AlertValidation open={open} onClose={handleClose} title={"Update Password Failed!"} errorResponse={errorResponse} redirectURL = {redirectURL}/>
      </Grid>
    </CardWrapper>
  );
}
