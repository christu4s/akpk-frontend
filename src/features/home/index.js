import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Footer from "../../components/Footer";
import HomeCard from "../../components/HomeCard";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/NewsCard";
import Sidebar from "../../components/Sidebar";
import DashboardLayout from "../../Layouts/dashboardLayout";

const useStyles = makeStyles((theme) => ({
  home: {
    margin: "0 10px 0 0 !important",
  },
  newsTitle: {
    color: "#101828",
    textAlign: "left",
  },
}));

const homeList = [
  {
    text: "Financial Education",
    body: "Financial Education for a Better Tomorrow",
    img: "education",
    color: "#23AEF0",
    url: "/education",
  },
  {
    text: "Financial Adivsory",
    body: "Putting a Smile on the Faces of Malaysians",
    img: "advisory",
    color: "#0F2540",
    url: "/advisory",
  },
  {
    text: "Customer Portal",
    body: "Helping Malaysians Get Back on Their Feet",
    img: "dmp",
    color: "#0E5490",
    url: "/debt",
  },
];

const newsList = [
  {
    text: "Brighten Up Dull Tired Skin",
    img: "news",
  },
  {
    text: "Brighten Up Dull Tired Skin",
    img: "news",
  },
  {
    text: "Brighten Up Dull Tired Skin",
    img: "news",
  },
  {
    text: "Brighten Up Dull Tired Skin",
    img: "news",
  },
];
export default function Home() {
  const classes = useStyles();
  return (
    <DashboardLayout footer>
      <Grid container item xs={12} spacing={2} className={classes.home}>
        {homeList?.map(({ text, body, img, color, url }) => (
          <Grid key={text} item xs={12} md={4} lg={4} xl={4}>
            <HomeCard
              url={url}
              title={text}
              body={body}
              img={img}
              color={color}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} xs={12} className={classes.home}>
        <Grid item xs={12}>
          <Typography variant="h3">Latest News</Typography>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {newsList?.map(({ text, img }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <NewsCard title={text} img={img} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
