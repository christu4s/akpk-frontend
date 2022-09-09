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
import {useAuth} from "../../../components/Auth";

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
  
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function EmailLogin() {
  const [isEmail, setIsEmail] = useState(true);
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [errorResponse, setErrorResponse] = useState();
  const [open, setOpen] = useState(false);
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   const submitLogin = () => {
    //     console.log(JSON.stringify(values, null, 2));
    //   }
    // },
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const redirectURL = () => {
    formik.values.password = '';
    formik.values.phone = '';
    formik.values.password = '';
    setOpen(false);
  }

 
  const submitLogin = () => {
   
    if(isEmail)
    {
      var dataInput = {email:formik.values.email, password:formik.values.password};
    } else {
      var dataInput = {contact_number:formik.values.phone.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, ""), password:formik.values.password};
    }
    axios.post(`login`, dataInput)
      .then(result => {
        if(result.data.status && result.data.status === true) {
          document.cookie = "token="+result.data.token+"; expires=0; path=/";
          if(result.data.user.email) {
            auth.login(result.data.user);
            document.cookie = "user="+result.data.user.email+"; expires=0; path=/";
            navigate("/home", {state:{result:result.data}});
          } 
          if(result.data.user.contact_number) {
            auth.login(result.data.user);
            document.cookie = "user="+result.data.user.contact_number+"; expires=0; path=/";
            navigate("/home", {state:{result:result.data}});
          }
      
        } else {
          setErrorResponse('Invalid credentials');
          return handleOpen();
        }
      }).catch(error => {
        setErrorResponse(error.response.data.message);
        return handleOpen();
    });
  }
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Header />
          <Grid item xs={12}>
            <Typography className={classes.inputLabel} variant="subtitle1">
             {isEmail ? "Email" : "Phone"}
            </Typography>
            {isEmail ? <TextField
              className={classes.input}
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              InputLabelProps={{ shrink: true }}
            /> : <TextField
            className={classes.input}
            id="phone"
            name="phone"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />}
            <Typography onClick={()=> setIsEmail(!isEmail)}>Change to {isEmail ? "Phone" : "Email"}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.inputLabel} variant="subtitle1">
              {t("phoneLogin.password")}
            </Typography>
            <TextField
              className={classes.input}
              fullWidth
              InputLabelProps={{ shrink: true }}
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid
            item
            xs={12}
            alignContent="flex-start"
            justifyContent="flex-start"
          >
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
              onClick={() => submitLogin()}
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
