import { Dialog, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import FirstStep from "./FirstStep";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import SecondStep from "./SecondStep";
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

const getContent = (id, handleNext) => {
  switch (id) {
    case 0:
      return <FirstStep id={id} setId={handleNext}  />;
      break;
    case 1:
      return <ThirdStep id={id} setId={handleNext} />;
      break;
    default:
      break;
  }
};

export default function ProfileDialog({ open, onClose }) {
  const [id, setId] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const handleNext = () => {
    console.log("id", id);
    id <= 0 ? setId(id + 1) : handleClose();
  };
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setId(0);
    }, 100);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      <Box className={classes.dialog}>{getContent(id, handleNext)}</Box>
      <Box onClick={handleClose} className={classes.iconContainer}>
        <CloseIcon className={classes.icon} />
      </Box>
    </Dialog>
  );
}
