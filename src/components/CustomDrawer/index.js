import Drawer from "@mui/material/Drawer";
import { Typography, Box, SvgIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ReactSVG } from "react-svg";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "5px 25px",
    backgroundColor: "#fff",
  },
  text: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold !important",
  },
  icon: {
    marginRight: 16,
    color: "#92929D !important",
  },
  log: {
    margin: "20px 0",
  },
  support: {
    margin: "20px 0",
    cursor: "pointer",
  },
  nav: {
    // backgroundColor: "#00AEEF",
    borderRadius: 6,
    padding: "12px 15px",
    marginBottom: 15,
  },
  navSelected: {
    backgroundColor: "#00AEEF",
  },
  textSlected: {
    color: "#FFF !important",
  },
  iconSelect: {
    color: "#FFF !important ",
  },
}));

export default function CustomDrawer({ open, onClose }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Drawer open={open} onClose={onClose} anchor={"left"}>
      <Box className={classes.sidebarContainer}>
        <Box className={classes.log} onClick={() => navigate("/home")}>
          <img
            src={require("../../assets/AKPK_logo.svg").default}
            width="102px"
            height="47px"
          />
        </Box>
        <Box className={classes.content}>
          <Box
            className={clsx(
              classes.nav,
              pathname == "/education" && classes.navSelected
            )}
            onClick={() => navigate("/education")}
          >
            <Typography
              className={clsx(
                classes.text,
                pathname == "/education" && classes.textSlected
              )}
              variant="h4"
            >
              <ReactSVG
                className={clsx(
                  classes.icon,
                  pathname == "/education" && classes.iconSelect
                )}
                src={require("../../assets/open-book.svg").default}
              />
              Financial Education
            </Typography>
          </Box>
          <Box
            className={clsx(
              classes.nav,
              pathname == "/advisory" && classes.navSelected
            )}
            onClick={() => navigate("/advisory")}
          >
            <Typography
              className={clsx(
                classes.text,
                pathname == "/advisory" && classes.textSlected
              )}
              variant="h4"
            >
              <ReactSVG
                className={clsx(
                  classes.icon,
                  pathname == "/advisory" && classes.iconSelect
                )}
                src={require("../../assets/money.svg").default}
              />
              Financial Advisory
            </Typography>
          </Box>
          <Box
            className={clsx(
              classes.nav,
              pathname == "/debt" && classes.navSelected
            )}
            onClick={() => navigate("/debt")}
          >
            <Typography
              className={clsx(
                classes.text,
                pathname == "/debt" && classes.textSlected
              )}
              variant="h4"
            >
              <ReactSVG
                className={clsx(
                  classes.icon,
                  pathname == "/debt" && classes.iconSelect
                )}
                src={require("../../assets/settings.svg").default}
              />
              Customer Portal
            </Typography>
          </Box>
        </Box>
        <Box onClick={() => navigate("/support")} className={classes.support}>
          <img
            src={require("../../assets/Support.png")}
            width="168px"
            height="214px"
          />
        </Box>
        <Box className={classes.nav} onClick={() => navigate("/settings")}>
          <Typography className={classes.text} variant="h4">
            <img
              className={classes.icon}
              src={require("../../assets/dashboard.svg").default}
            />
            Settings
          </Typography>
        </Box>
        <Box className={classes.nav} onClick={() => navigate("/login")}>
          <Typography className={classes.text} variant="h4">
            <img
              className={classes.icon}
              src={require("../../assets/logout.svg").default}
            />
            Logout
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
