import { TextField, Typography, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import { useAuth } from '../Auth';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: "6px !important",
    color: "#344054 !important",
  },
  button: {
    color: "#FFF !important",
    fontSize: "16px !important",
    padding: "13px 0 !important",
  },
  title: {
    color: "#101828 !important",
    textAlign: "left !important",
    fontSize: "28px !important",
    fontWeight: "bold !important",
  },
  subtitle: {
    color: "#667085 !important",
    textAlign: "left !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
}));

export default function FirstStep({ setId }) {
  const classes = useStyles();
  const [fullName, setFullName] = useState(null);
  const [icNumber, setIcNumber] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const {token, userInfo, user, setUserInfo} = useAuth();
  
  
  const updateProfile = () => {
    console.log('userInfoNew',userInfo);
    if(userInfo.login_via == 'email') {
      var postData = { name:fullName, contact_number: contactNumber,ic_number:icNumber, email: userInfo.user.email, login_via:userInfo.login_via };
    } else {
      var postData = { name:fullName, contact_number: userInfo.user.contact_number,ic_number:icNumber,  email: email, login_via:userInfo.login_via};
    }
    axios.post(`update_profile`, postData)
      .then(result => {
        if(result.data.status && result.data.status === true) {
          return setId();
        } else {
          return false;
        }
      }) 
   }
  
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Complete profile</Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Please fill out all the required fields
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          Full Name
        </Typography>
        <TextField fullWidth placeholder="Full Name" value={fullName} onChange = {(e) => setFullName(e.target.value)}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          IC Number
        </Typography>
        <TextField fullWidth placeholder="IC Number" value={icNumber} onChange = {(e) => setIcNumber(e.target.value)}/>
      </Grid>
       { userInfo.email? <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          Contact number
        </Typography>
        <TextField fullWidth placeholder="Contact number" value={contactNumber} onChange = {(e) => setContactNumber(e.target.value)} />
      </Grid> : <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          Email
        </Typography>
        <TextField fullWidth placeholder="Email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
      </Grid>}
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          className={classes.button}
          // onClick={setId}
          onClick = {() => updateProfile()}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
