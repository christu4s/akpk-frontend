import { TextField, Typography, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';

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
  const updateProfile = () => {
    // if(user.login_via == 'email') {
    //   var postData = { name:fullName, contact_number: contactNumber,ic_number:icNumber, token:user.token, email: user.user.email, login_via:user.login_via };
    // } else {
    //   var postData = { name:fullName, contact_number: user.user.contact_number,ic_number:icNumber, token:user.token, email: email, login_via:user.login_via};
    // }
    // axios.post(`http://10.250.1.121/osp-server/api/update_profile`, postData)
    //   .then(result => {
    //     if(result.data.status && result.data.status === true) {
    //       return setId();
    //     } else {
    //       return false;
    //     }
    //   }) 
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
      {  <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          Email
        </Typography>
        <TextField fullWidth placeholder="Email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
      </Grid>}
      { <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          Contact number
        </Typography>
        <TextField fullWidth placeholder="Contact number" value={contactNumber} onChange = {(e) => setContactNumber(e.target.value)} />
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
