import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import CardWrapper from "../../../components/Card";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import AlertValidation from "../../../components/AlertValidation";
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
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function EmailSignUp() {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [errorResponse, setErrorResponse] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    /*onSubmit: (values) => {
     // alert(JSON.stringify(values, null, 2));
     
      axios.post(`http://10.250.1.121/osp-server/api/signup_email`,{ email: values.email})
      .then(result => {
        console.log(typeof result.status);return false;
       if(result.otp && result.otp !== '') {
          navigate("/email-check");
       }
      })
      navigate("/email-check");

    },*/
    
  });

  const redirectURL = () => {
    formik.values.email = '';
    setOpen(false);
  }
  const handleSubmit = event => {
    event.preventDefault(); //  prevent page refresh
    axios.post(`http://10.250.1.121/osp-server/api/signup_email`,{ email: formik.values.email})
      .then(result => {
        console.log(result);
        if(result.data.status && result.data.status === 'SUCCESS') {
          document.cookie = "token="+result.data.token+"; expires=0; path=/";
          navigate("/email-check/",{state:{email:formik.values.email}});
        } else {
          setErrorResponse(result.data.message);
          return handleOpen();
        }
      }).catch(error => {
        setErrorResponse(error.response.data.message);
        return handleOpen();
    }); 
  };
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Header />
          <Grid item xs={12}>
            <Typography className={classes.inputLabel} variant="subtitle1">
              {t("phoneLogin.email")}
            </Typography>

            <TextField
              className={classes.input}
              id="email"
              name="email"
              type="email"
              placeholder="akpk@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              label={t("phoneLogin.remember")}
              className={classes.checkbox}
              control={
                <Checkbox
                  sx={{
                    color: "#D0D5DD",
                  }}
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.buttonContained}
              fullWidth
              variant="contained"
              type="submit"
            >
              {t("phoneLogin.log")}
            </Button>
          </Grid>
        </form>
      </Grid>
      <AlertValidation open={open} onClose={handleClose} errorResponse={errorResponse} redirectURL = {redirectURL}/>
    </CardWrapper>
  );
}
