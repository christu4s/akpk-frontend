import { Dialog, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import ThirdStep from "./ThirdStep";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: 40,
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    backgroundColor: "#F4F9FD",
    borderRadius: "50%",
  },
  icon: {},
}));

const getContent = (id,title, handleNext, errorResponse, redirectURL) => {
  switch (id) {
    case 0:
      return <ThirdStep id={id} title={title} setId={handleNext} errorResponse={errorResponse} redirectURL={redirectURL} />;
      break;
    default:
      break;
  }
};

export default function AlertValidation({ open, onClose, errorResponse, redirectURL ,title}) {
  const [id, setId] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const handleNext = () => {
  
    id <= 0 ? setId(id + 1) : handleCloseUp();
  };
  const handleCloseUp = () => {
    onClose();
    setTimeout(() => {
      setId(0);
    }, 100);
  };

  return (
    <Dialog open={open} onClose={handleCloseUp} fullScreen={fullScreen}>
      <Box className={classes.dialog}>{getContent(id, title, handleNext, errorResponse, redirectURL)}</Box>
      <Box onClick={handleCloseUp} className={classes.iconContainer}>
        <CloseIcon className={classes.icon} />
      </Box>
    </Dialog>
  );
}
