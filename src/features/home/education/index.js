import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import BlueCard from "../../../components/BlueCard";
import ChartCard from "../../../components/ChartCard";
import  {ParticipationCard, CourseCard} from "../../../components/ParticipationCard";
import DashboardLayout from "../../../Layouts/dashboardLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../components/Auth';
import axios from 'axios';
import DmpCard from "../../../components/DMPCard";
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
  button: {
    outline: 'unset',
    backgroundColor: '#06A8E5',
    border: 'unset',
    padding: '11px 16px',
    color: '#FCFCFD',
    borderRadius: 8,
    fontSize: 16,
    cursor: 'pointer',
    
  },
  wrapper: {
      padding: '80px 50px 240px 50px ',
      justifyContent: 'center',
  }
}));

export default function Education() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);
  const {token, userInfo, user, setUserInfo} = useAuth();
  const [data, setData] = useState({});
  const [courses, setCourses] = useState({});
 
  console.log('i am new user',userInfo);
  const navigateClientLocation = event => {
    if(connected === false) {
       window.open('http://10.250.1.121/osp-server/api/feconnect', '_self', 'noopener,noreferrer');
    } 
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 const navigateClientLocationDisconnect = event => {
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

 useEffect(() => {
  axios.get(`http://10.250.1.121/osp-server/api/list_fe_dashboard_items`,config)
   .then(result => {
    setCourses(result.data.response.claim.Courses);
    console.log('iam ok ',result.data.response.claim);
    }).catch(error => { return error; });
}, [JSON.stringify(config)]);
  
  return (
    <DashboardLayout>
      <Grid container spacing={2} className={classes.margin}>
        <Grid item xs={12}>
          <BlueCard
            title={"Financial Education"}
            color="rgba(15, 90, 150, 0.6)"
            image="education"
            text="AKPK provides financial education programmes, materials and advisory on these matters relating to money management and proper use of credit; while offering modules that cater for specific financial needs in four (4) stages of life."
            // connected={userInfo && userInfo.fe_connected}
            // handleConnect={() => navigateClientLocation()}
            // //handleConnect={() => setConnected(true)}
            // handleDisonnect={() => navigateClientLocationDisconnect()}
          />
        </Grid>
        <div className={classes.wrapper}>
        <Grid container item spacing={12} alignItems='center' justifyContent='center' >
          <Grid item xs={6}>
            <DmpCard
              title='My Participation'
              icon='participation'
              content={[{
                title: 'Learning',
                value: '1'
              },
              {
                title: 'Event',
                value: '1'
              },
              {
                title: 'Research',
                value: '1'
              },
              {
                title: 'Publication',
                value: '1'
              },
            ]}
            />
          </Grid>
          <Grid item xs={6}>
            <DmpCard
              title='My Contributions'
              icon='contributions'
              content={[{
                title: 'Downloads',
                value: '1'
              },
              {
                title: 'Likes',
                value: '1'
              },
              {
                title: 'Shares',
                value: '1'
              },
            ]}
            />
          </Grid>
          <Grid item xs={12}>
            <DmpCard
              title='My Transactions'
              icon='transactions'
              Button={<button className={classes.button}>View transactions</button>}
              content={[{
                title: 'Learning',
                value: 'RM 0.00'
              },
              {
                title: 'Event',
                value: 'RM 0.00'
              },
              {
                title: 'Publication',
                value: 'RM 0.00'
              },
              {
                title: 'Publication',
                value: 'RM 0.00'
              },
            ]}
            />
          </Grid>
          <Grid item xs={12}>
            <DmpCard
              title='My Badges'
              icon='badges'
              Button={<button className={classes.button}>View badges</button>}
              content={[{
                title: 'Login Badge',
                value: '0'
              },
              {
                title: 'Learning Badge',
                value: '0'
              },
              {
                title: 'Test Badge',
                value: '0'
              },
              {
                title: 'Communication Badge',
                value: '0'
              },
            ]}
            />
          </Grid>
          <Grid item xs={6}>
            <DmpCard
              title='My Achievements'
              icon='achievements'
              Button={<button className={classes.button}>View point</button>}
               content={[{
                title: 'Accumulated Points',
                value: '0'
              },
              {
                title: 'Level',
                value: '0'
              },
              
            ]}
            />
          </Grid>
          <Grid item xs={6}>
            <DmpCard
              title='My Series'
              icon='series'
              Button={<button className={classes.button}>View series</button>}
              content={[{
                title: 'Your Recent Series'
              }]}
            />
          </Grid>
          <Grid item xs={12}>
            <DmpCard
              title='My Courses'
              icon='courses'
              Button={<button className={classes.button}>View courses</button>}
              content={[{
                title: '1. Templat Praktikal Pengurusan Kewangan PKS - 30/08/2022'
              }]}
            />
          </Grid>
         </Grid>
        </div>
      </Grid>
    </DashboardLayout>
  );
}
