import {
  AppBar,
  Input,
  Toolbar,
  Box,
  InputAdornment,
  TextField,
  Badge,
  Typography,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { BiSearch } from "react-icons/bi";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "../CustomDrawer";
import { useAuth } from "../Auth";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xl")]: {
      justifyContent: "space-between",
    },
    padding: "15px 58px 15px 40px",
    backgroundColor: "#FFF",
  },
  menuIcon: {
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      display: "block",
    },
  },
  search: {
    width: "260%",
    height: "44px",

    color: "#667085 !important",
    fontSize: 16,
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  bellContainer: {
    marginRight: 26,
    backgroundColor: "#F9FAFB",
    borderRadius: "50%",
    padding: 10,
    position: "relative",
    cursor: "pointer",
  },
  imageContainer: {
    marginRight: 10,
    cursor: "pointer",
  },

  bell: {
    fontSize: 32,
  },
  profileCompleted: {
    backgroundColor: "#FF5C5C",
    padding: "8px 0",
    color: "#FFF !important",
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px !important",
  },
  click: {
    cursor: "pointer",
    textDecoration: "underline",
  },
}));

export default function Navbar({ openDialog }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomDrawer open={open} onClose={handleClose} />
      <Box className={classes.navbar}>
        {/* <Box className={classes.searchContianer}>
          <TextField
            className={classes.search}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiSearch />
                </InputAdornment>
              ),
            }}
          />
        </Box> */}
        <Box className={classes.menuIcon} onClick={handleOpen}>
          <MenuIcon className={classes.menuIcon} />
        </Box>
        <Box className={classes.rightContainer}>
          {/* <Box className={classes.bellContainer}>
            <Badge className={classes.badge} badgeContent={4} color="error">
              <NotificationsNoneIcon className={classes.bell} color="action" />
            </Badge>
          </Box> */}
          {/* <Box className={classes.profile} onClick={openDialog} >
            <Box className={classes.imageContainer}>
              <img
                width="50"
                height="50"
                src={require("../../assets/Avatar.png")}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1">{auth.user}</Typography>
              <Typography variant="subtitle2">
                Financial Administrator 
              </Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
      {/* <Box>
        <Typography className={classes.profileCompleted}>
          Your profile is not completed{" "}
          <span onClick={openDialog} className={classes.click}>
            Click here
          </span>{" "}
          to complete the profile.
        </Typography>
      </Box> */}
    </>
  );
}
