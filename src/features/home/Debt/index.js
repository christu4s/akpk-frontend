import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  Box,
  Chip,
  FormControlLabel,
  Checkbox,
  Card,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import BlueCard from "../../../components/BlueCard";
import ChartCard from "../../../components/ChartCard";
import ParticipationCard from "../../../components/ParticipationCard";
import DashboardLayout from "../../../Layouts/dashboardLayout";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BiSearch } from "react-icons/bi";
import { CheckBox } from "@mui/icons-material";
import DebtCard from "../../../components/DebtCard";
import { useAuth } from '../../../components/Auth';
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px 20px 5px 35px !important",
  },
  dashboard: {
    fontSize: "30px !important",
    textAlign: "left !important",
    color: "#101828 !important",
    fontWeight: "500 !important",
    margin: "10px !important",
  },

  search: {
    color: "#667085 !important",
    fontSize: 16,
    margin: "30px 0 15px !important",
  },
  filter: {
    border: "1px solid #D0D5DD !important",
    display: "flex",
    // flexDirection: "column-revers",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 0 !important",
    color: "#344054 !important",
    fontSize: "14px !important",
    margin: "30px 0 15px !important",
  },
  filterIcon: {
    marginRight: 5,
  },
  button1: {
    padding: "10px 0 !important",
    // backgroundColor: "#717BBC !important",
    color: "#fff !important",
    fontSize: "14px !important",
    margin: "10px !important",
  },
  card: {
    border: "1px solid #00AEEF !important",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  pay: {
    fontSize: "20px !important",
    fontWeight: "bold",
    color: "#00AEEF !important",
  },
  debt: {
    margin: "39px 0 140px !important",
  },
}));

export default function Debt() {
  const ospConnectUrl = 'http://10.250.1.130:2800/customerindex.html#/OAuth/Auth/clientID=AKPK_OSP';
  const classes = useStyles();
  const [connected, setConnected] = useState(false);
  const {token, userInfo, user, setUserInfo} = useAuth();
  const [data, setData] = useState({});
  const { DMPStatus, DMPReferenceNumber,CurrentPayment, PaymentInArrears, LastPaymentDate } = data || {};
    
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const getApplicationUrl = () => {
      axios.get(`get_application_url`,config)
     .then(result => {
       if(result.data.response.application_url) {
         window.open(result.data.response.application_url+'/LoginCode='+result.data.response.login_code+'&CustomerID='+result.data.CustomerID, '_self', 'noopener,noreferrer');
       } else {
        console.log('Not yet received url');
       }
     }).catch(error => {
       return error;
    });
  }
  const navigateClientLocation = event => {
    if(connected === false) {
    window.open(ospConnectUrl, '_self', 'noopener,noreferrer');
    } 
    //  else {
    //   const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    //   };
    //    axios.get(`disconnect_customer_portal`,config)
    //   .then(result => {
    //     if(result.data.status == true) {
    //       setUserInfo({...userInfo, cp_connected: false});
    //      }
    //   }) 
    // }
  }

 const navigateClientLocationDisconnect = event => {
    axios.get(`disconnect_fe_portal`,config)
    .then(result => {
      console.log('result', result);
      if(result.data.status == true) {
         setUserInfo({...userInfo, cp_connected: false});
       }
    }) 
 }
  
  useEffect(() => {
    axios.get(`get_osp_customer_details`,config)
     .then(result => {
       setData(result.data.response);
      }).catch(error => { return error; });
  }, [JSON.stringify(config)]);

  return (
    <DashboardLayout>
      <Grid container spacing={2} className={classes.margin}>
        <Grid item xs={12}>
          <BlueCard
            title="Customer Portal"
            image="dmp"
            text="AKPK provides an avenue for distressed borrowers to regain control of their debts by working closely with financial advisors in developing a personalised debt repayment plan in consultation with their respective financial service providers."
            color="rgba(14, 84, 144, 0.6)"
            connected={userInfo && userInfo.cp_connected}
            handleConnect={() => navigateClientLocation()}
            handleDisonnect={() => navigateClientLocationDisconnect()}
          />
        </Grid>
        <Grid container item xs={12}>
          <Grid xs={6} item>
            <Typography className={classes.dashboard}>
              Customer Portal Dashboard 
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
              <Button fullWidth variant="contained" className={classes.button1} onClick={getApplicationUrl}>
                Check Application Status
              </Button>            
          </Grid>
        </Grid>

        <Grid item xs={12} container spacing={2} className={classes.debt}>
          <Grid item xs={3}>
            <DebtCard icon={"employee"} text={"DMP Status"} title={DMPStatus} />
          </Grid>
          <Grid item xs={4}>
            <DebtCard
              icon={"link"}
              text={"DM Reference Number"}
              title={DMPReferenceNumber}
            />
          </Grid>
          <Grid item xs={5}>
            <DebtCard
              icon={"rm"}
              text={"Current Instalment to AKPK"}
              title={CurrentPayment}
            />
          </Grid>
          <Grid item xs={4}>
            <DebtCard
              icon={"calander"}
              text={"Last Payment to AKPK "}
              title={LastPaymentDate}
            />
          </Grid>
          <Grid item xs={5}>
            <DebtCard
              icon={"rm"}
              text={"Payment in arrears to AKPK"}
              title={PaymentInArrears}
            />
          </Grid>
          <Grid item xs={3}>
            <Card elevation={1} className={classes.card} >
              <Typography className={classes.pay} onClick={getApplicationUrl}>Pay Now</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
