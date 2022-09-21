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
  const defaultPage = ' https://fpxuat.akpk.org.my:8443';
  const classes = useStyles();
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);
  const {token, userInfo, user, setUserInfo} = useAuth();
  const [data, setData] = useState({});
  const currency = 'RM ';
  const { participationLearning, participationEvent, participationResearch, participationPublication, contributionDownloads, contributionLikes, contributionShares, transactionLearning, transactionEvent, transactionPublication, badgeLogin, badgeLearning, badgeTest, badgeCommunication, achievementPoints, achievementLevel, Courses = []} = data || {};
  
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
         setUserInfo({...userInfo, fe_connected: false});
       }
    }) 
 }

 const viewMyCourses = () => {
  window.open(myCourseUrl, '_target', 'noopener, noreferrer');
 }

 const viewPurchaseHostory = () => {
  window.open(purchaseHistoryUrl, '_target', 'noopener, noreferrer');
 }

 const viewDefaultPage = () => {
  window.open(defaultPage, '_target', 'noopener, noreferrer');
 }
 useEffect(() => {
  axios.get(`list_fe_dashboard_items`,config)
   .then(result => {
    setData(result.data.response.claim);
    }).catch(error => { return error; });
}, [JSON.stringify(config)]);
  
  return (
    <DashboardLayout>
      <Grid container item xs={12} spacing={2} className={classes.margin}>
        <Grid item xs={12}>
          <BlueCard
            title={"Financial Education"}
            color="rgba(15, 90, 150, 0.6)"
            image="education"
            text="AKPK provides financial education programmes, materials and advisory on these matters relating to money management and proper use of credit; while offering modules that cater for specific financial needs in four (4) stages of life."
             connected={userInfo && userInfo.fe_connected}
             handleConnect={() => navigateClientLocation()}
             handleDisconnect={() => navigateClientLocationDisconnect()}
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
                value:  participationEvent
              },
              {
                title: 'Research',
                value: participationResearch
              },
              {
                title: 'Publication',
                value: participationPublication
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
                value: contributionDownloads
              },
              {
                title: 'Likes',
                value: contributionLikes
              },
              {
                title: 'Shares',
                value: contributionShares
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
                value:  transactionLearning ? currency + transactionLearning : currency + 0
              },
              {
                title: 'Event',
                value: transactionEvent ? currency + transactionEvent : currency + 0
              },
              {
                title: 'Publication',
                value:  transactionPublication ? currency +transactionPublication : currency + 0
              },
              {
                title: 'Publication',
                value:  participationPublication ? currency +participationPublication : currency + 0
              },
            ]}
            />
          </Grid>
          <Grid item xs={12}>
            <DmpCard
              title='My Badges'
              icon='badges'
              Button={<button className={classes.button} onClick={viewDefaultPage}>View badges</button>}
              content={[{
                title: 'Login Badge',
                value: badgeLogin
              },
              {
                title: 'Learning Badge',
                value: badgeLearning
              },
              {
                title: 'Test Badge',
                value: badgeTest
              },
              {
                title: 'Communication Badge',
                value: badgeCommunication
              },
            ]}
            />
          </Grid>
          <Grid item xs={6}>
            <DmpCard
              title='My Achievements'
              icon='achievements'
              Button={<button className={classes.button} onClick={viewDefaultPage}>View point</button>}
               content={[{
                title: 'Accumulated Points',
                value: achievementPoints
              },
              {
                title: 'Level',
                value: achievementLevel
              },
              
            ]}
            />
          </Grid>
          <Grid item xs={6}>
            <DmpCard
              title='My Series'
              icon='series'
              Button={<button className={classes.button} onClick={viewDefaultPage}>View series</button>}
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
            >
            <ol>
              {Courses && Courses.map((course, index)=> <li key={index}>{course.courseTitle}: {course.courseDate}</li> )} 
             </ol>
            </DmpCard>
          </Grid>
         </Grid>
        </div>
      </Grid>
    </DashboardLayout>
  );
}
