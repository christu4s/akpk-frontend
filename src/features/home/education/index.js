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
  const feconnectUrl = 'http://10.250.1.121/osp-server/api/feconnect';
  const myCourseUrl = 'https://fpxuat.akpk.org.my:8443/eLearning/Courses/MyCourses';
  const purchaseHistoryUrl = 'https://fpxuat.akpk.org.my:8443/Commerce/Cart/PurchaseHistory';
  const classes = useStyles();
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);
  const {token, userInfo, user, setUserInfo} = useAuth();
  const [data, setData] = useState({});
  const [courses, setCourses] = useState({});
  const { participationLearning, participationEvent, participationResearch, participationPublication, contributionDownloads, contributionLikes, contributionShares, transactionLearning, transactionEvent, transactionPublication, badgeLogin, badgeLearning, badgeTest, badgeCommunication, achievementPoints, achievementLevel} = data || {};
  
  console.log('i am new user',userInfo);
  const navigateClientLocation = event => {
    if(connected === false) {
       window.open(feconnectUrl, '_self', 'noopener,noreferrer');
    } 
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 const navigateClientLocationDisconnect = event => {
    axios.get(`disconnect_fe_portal`,config)
    .then(result => {
      console.log('result', result);
      if(result.data.status == true) {
        // setConnected(false);
        setUserInfo({...userInfo, fe_connected: false});
        // setConnected(false);
      }
    }) 
 }

 const viewMyCourses = () => {
  window.open(myCourseUrl, '_target', 'noopener, noreferrer');
 }

 const viewPurchaseHostory = () => {
  window.open(purchaseHistoryUrl, '_target', 'noopener, noreferrer');
 }
 useEffect(() => {
  axios.get(`list_fe_dashboard_items`,config)
   .then(result => {
    console.log('iam ok ',result.data.response.claim);
    setData(result.data.response.claim);
    setCourses(data.Courses);
    console.log('coursesnew2',JSON.stringify(courses));
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
             connected={userInfo && userInfo.fe_connected}
             handleConnect={() => navigateClientLocation()}
            // //handleConnect={() => setConnected(true)}
             handleDisonnect={() => navigateClientLocationDisconnect()}
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
                value: participationLearning
              },
              {
                title: 'Event',
                value:  ''+participationEvent
              },
              {
                title: 'Research',
                value: ''+participationResearch
              },
              {
                title: 'Publication',
                value: ''+participationPublication
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
                value: ''+contributionDownloads
              },
              {
                title: 'Likes',
                value: ''+contributionLikes
              },
              {
                title: 'Shares',
                value: ''+contributionShares
              },
            ]}
            />
          </Grid>
          <Grid item xs={12}>
            <DmpCard
              title='My Transactions'
              icon='transactions'
              Button={<button className={classes.button} onClick={viewPurchaseHostory}>View transactions</button>}
              content={[{
                title: 'Learning',
                value: 'RM '+ transactionLearning
              },
              {
                title: 'Event',
                value: 'RM ' + transactionEvent
              },
              {
                title: 'Publication',
                value: 'RM ' + transactionPublication
              },
              {
                title: 'Publication',
                value: 'RM ' + participationPublication
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
                value: ''+badgeLogin
              },
              {
                title: 'Learning Badge',
                value: ''+badgeLearning
              },
              {
                title: 'Test Badge',
                value: ''+badgeTest
              },
              {
                title: 'Communication Badge',
                value: ''+badgeCommunication
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
                value: ''+achievementPoints
              },
              {
                title: 'Level',
                value: ''+achievementLevel
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
              Button={<button className={classes.button} onClick={viewMyCourses}>View courses</button>}
              content={[{courses}]}
            />
          </Grid>
         </Grid>
        </div>
      </Grid>
    </DashboardLayout>
  );
}
