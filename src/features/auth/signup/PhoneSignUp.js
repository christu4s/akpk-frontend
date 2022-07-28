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
import InputMask from "react-input-mask";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AlertValidation from "../../../components/AlertValidation";

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
  phone: yup.string().required("Phone is required"),
  // .matches("^(+?6?01)[0-46-9]-*[0-9]{7,8}$", "insert a valid phone number"),
});

export default function PhoneSignUp() {
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
      phone: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     // return console.log(formik.values.phone);
     if(formik.values.phone) {
        axios.post(`http://10.250.1.121/osp-server/api/signup_number`,{ mobile_phone: formik.values.phone.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, "")})
        .then(result => {
          if(result.data.status && result.data.status === 'success') { 
            navigate("/phone-check", {state:{mobile_phone:formik.values.phone}});
          } else {
            setErrorResponse(result.data.message);
            return handleOpen();
          }
        }).catch(error => {
          setErrorResponse(error.response.data.message);
          return handleOpen();
      }); 
    } else {
        setErrorResponse('Please enter your phone number');
        return handleOpen();
    }
  },
  });
 
  const redirectURL = () => {
    formik.values.phone = '';
    setOpen(false);
  }
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Header />
          <Grid item xs={12}>
            <Typography className={classes.inputLabel} variant="subtitle1">
              {t("phoneLogin.phone")}
            </Typography>
            <InputMask
              className={classes.input}
              mask={"+60 99999999999"}
              maskChar={null}
              // placeholder="+60 12323344585"
              id="phone"
              name="phone"
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  type="tel"
                  disableUnderline
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              )}
            </InputMask>
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
