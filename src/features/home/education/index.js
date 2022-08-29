import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import BlueCard from "../../../components/BlueCard";
import ChartCard from "../../../components/ChartCard";
import ParticipationCard from "../../../components/ParticipationCard";
import DashboardLayout from "../../../Layouts/dashboardLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../components/Auth';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px 20px 5px 35px !important",
  },
  participation: {
    fontSize: "23px !important",
    textAlign: "left !important",
    color: "#000 !important",
    fontWeight: "bold !important",
    marginBottom: "25px !important",
    marginTop: "60px !important",
  },
}));

export default function Education() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);
  const {token, userInfo, user, setUserInfo} = useAuth();
  // const navigateClientLocation = event => {
  //     window.open('https://power.akpk.org.my/', '_blank', 'noopener,noreferrer');
  // }
  console.log('i am new user',userInfo);
 // setConnected(userInfo.fe_connected?userInfo.fe_connected:false);
 
   const navigateClientLocation = event => {
    if(connected === false) {
       window.open('http://10.250.1.121/osp-server/api/feconnect', '_self', 'noopener,noreferrer');
    } 
  }

 const navigateClientLocationDisconnect = event => {
    
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.get(`http://10.250.1.121/osp-server/api/disconnect_fe_portal`,config)
    .then(result => {
      console.log('result', result);
      if(result.data.status == true) {
        // setConnected(false);
        setUserInfo({...userInfo, fe_connected: false});
        // setConnected(false);
      }
    }) 
 }
  
  return (
    <DashboardLayout>
      <Grid container spacing={2} className={classes.margin}>
        <Grid item xs={12}>
          <BlueCard
            title={"Financial Education"}
            color="rgba(15, 90, 150, 0.6)"
            image="education"
            text="AKPK provides financial education programmes, materials and advisory on these matters relating to money management and proper use of credit; while offering modules that cater for specific financial needs in four (4) stages of life."
            connected={userInfo && userInfo.fe_connected}
            handleConnect={() => navigateClientLocation()}
            //handleConnect={() => setConnected(true)}
            handleDisonnect={() => navigateClientLocationDisconnect()}
          />
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.participation}>
              My Participation
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.participation}>
              My Purchases
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ChartCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ChartCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ChartCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ChartCard />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.participation}>
              My Courses
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParticipationCard />
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
