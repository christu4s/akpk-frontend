import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CardWrapper from "../../../components/Card";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import InputMask from "react-input-mask";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


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
  password: yup.string().required("Password is required").min(6,'Password Must be a minumum of 6 caracters'),
  c_password: yup.string().required("Password confirmation is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default function PhoneSignUp() {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      c_password : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     // return console.log(formik.values.phone);
      axios.post(`http://10.250.1.121/osp-server/api/signup_number`,{ mobile_phone: formik.values.phone})
      .then(result => {
        if(result.data.status && result.data.status === 'success') { 
          navigate("/phone-check", {state:{mobile_phone:formik.values.phone}});
        } else {
          return false;
        }
      }) 
    },
  });
 
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Header
            title={t('password.update_password')}
            subtitle={t('password.update_password_information')}
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
                error={formik.touched.c_password && Boolean(formik.errors.c_password)}
                helperText={formik.touched.c_password && formik.errors.c_password}
                fullWidth
                InputLabelProps={{ shrink: true }}
            />
          </Grid>

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
      </Grid>
    </CardWrapper>
  );
}
