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

export default function FirstStep({ id, setId }) {
  
  const classes = useStyles();
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [postData, setPostData] = useState({});
  const updatePassword = (setId) => {
  // if(user.result.user && user.result.user.email != null) {
  //   var postData = { email: user.result.user.email, token:user.result.token,password:password, c_password:confirmPassword};
  // } else {
  //   var postData = { contact_number: user.result.user.contact_number, token:user.result.token,password:password, c_password:confirmPassword};
  // }
  // axios.post(`http://10.250.1.121/osp-server/api/update_password`, postData)
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
        <Typography className={classes.title}>Update password</Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Please fill out all the required fields
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          New password
        </Typography>
        <TextField fullWidth placeholder="New Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.label}>
          Confirm password
        </Typography>
        <TextField fullWidth placeholder="Confirm password" value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          className={classes.button}
          onClick={() => updatePassword(setId)}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
