import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, createContext, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileDialog from "../components/ProfileDialog";
import UpdatePassword from "../components/UpdatePassword";
import Sidebar from "../components/Sidebar";


const UserContext = createContext()

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: "#FCFCFD",
  },
  sidebar: {
    [theme.breakpoints.down("xl")]: {
      display: "none !important",
    },
  },
}));

export default function DashboardLayout({ children, footer }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);

  
  useEffect(() => {
    //console.log(state.result.new_user_status);
   // (state.result.new_user_status) === "no" ? setOpenUp(true) : setOpenUp(false);
  });
  //(state.result.new_user_status) == "yes" ? setOpenUp(true) : setOpenUp(false);
  //(state.result.new-user-status)?setOpenUp(true):setOpenUp(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseUP = () => {
    setOpenUp(false);
  };

  const handleOpenUP = () => {
    setOpenUp(true);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item lg={2} xl={2} xs={0} md={2} className={classes.sidebar}>
          <Sidebar />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          xl={10}
          className={classes.dashboard}
        >
          <Grid item xs={12}>
            <Navbar openDialog={handleOpen} />
          </Grid>
          <Grid item container spacing={2} xs={12}>
            {children}
          </Grid>
          {footer && (
            <Grid item xs={12}>
              <Footer />
            </Grid>
          )}
        </Grid>
      </Grid>
      <ProfileDialog open={open} onClose={handleClose} />
      <UpdatePassword open={openUp} onClose={handleCloseUP} />
      </>
  );
}
