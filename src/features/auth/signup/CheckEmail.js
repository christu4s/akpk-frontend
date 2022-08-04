import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { flexbox, fontWeight, width } from "@mui/system";
import { BsArrowLeftShort } from "react-icons/bs";

import React, { useState } from "react";
import CardWrapper from "../../../components/Card";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import {useAuth} from "../../../components/Auth";

const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 16,
    color: "#FFF !important",
  },
  image: {
    textAlign: "center",
  },
  backText: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 500,
    color: "#667085",
    cursor: "pointer",
  },
  backArrow: {
    fontSize: 24,
  },
  otpContainer: {
    display: "flex",
    justifyContent: "center",
  },
  otp: {
    width: "63px !important",
    height: "63px !important",
    borderRadius: 8,
    border: "1px solid #D0D5DD",
    fontSize: 35,
  },
  resend: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    color: "#00AEEF !important",
    fontSize: "14px !important",
    marginLeft: "5px !important",
    cursor: "pointer !important",
  },
}));

export default function CheckEmail() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const {state} = useLocation();
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const redirectPath = state ? '/home': '/';
  const OTPSubmit = event => {
     event.preventDefault(); //  prevent page refresh
     axios.post(`http://10.250.1.121/osp-server/api/verify_opt_email`,{ email: state.email, otp: OTP})
      .then(result => {
        if(result.data.success && result.data.success === true) {
          auth.login(result.data.user);
          document.cookie = "user="+result.data.user.email+"; expires=0; path=/";
          document.cookie = "token="+result.data.token+"; expires=0; path=/";
          navigate(redirectPath,{state:{result:result.data}});
        } else {
          return false;
        }
      }) 
   
  };
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.image}>
          <img
            src={require("../../../assets/AKPK_logo.svg").default}
            width="160px"
            height="75px"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Check your email</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            We sent a verification link to {state.email}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.otpContainer}>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            // secure
            inputClassName={classes.otp}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.buttonContained}
            variant="contained"
            onClick={OTPSubmit}
            fullWidth
          >
            Verify Email
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.resend}>
          <Typography variant="subtitle1">Didn’t receive the email?</Typography>
          <Typography className={classes.resendText}>
            Click to resend
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.backText}
            variant="subtitle1"
            onClick={() => navigate("/")}
          >
            <BsArrowLeftShort className={classes.backArrow} /> Back to login
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}
