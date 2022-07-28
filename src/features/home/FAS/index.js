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
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import BlueCard from "../../../components/BlueCard";
import ChartCard from "../../../components/ChartCard";
import ParticipationCard from "../../../components/ParticipationCard";
import DashboardLayout from "../../../Layouts/dashboardLayout";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BiSearch } from "react-icons/bi";
import { CheckBox } from "@mui/icons-material";
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
    backgroundColor: "#717BBC !important",
    color: "#fff !important",
    fontSize: "14px !important",
    margin: "10px !important",
  },
  button2: {
    padding: "10px 0 !important",
    backgroundColor: "#32D583 !important",
    color: "#fff !important",
    fontSize: "14px !important",
    margin: "10px !important",
  },
  paper: {
    backgroundColor: "#ffff",
  },
  tableTitle: {
    fontSize: "22px !important",
    textAlign: "left !important",
    color: "#101828 !important",
    padding: "22px 24px !important",
  },
  tableHeader: {
    backgroundColor: "#F9FAFB !important ",
    width: "100% !important",
    borderBottom: "1px solid #E4E7EC !important",
    marginLeft: "16px !important",
  },

  headerContent: {
    fontSize: "16px !important",
    padding: "22px 24px !important",
    color: "#000 !important",
    textAlign: "left !important",
    fontWeight: "600 !important",
  },
  tableContent: {
    borderBottom: "1px solid #E4E7EC !important",
    marginLeft: "16px !important",
  },
  date: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "22px 24px !important",
  },
  checkBox: {
    border: "1px solid #D0D5DD !important",
    borderRadius: "6px !important ",
  },
  branch: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left !important",
    margin: "22px 24px !important",
  },
  branchTitle: {
    textAlign: "left !important",
    fontSize: "14px !important",
    color: "#101828 !important",
  },
  branchDesc: {
    textAlign: "left !important",
    fontSize: "14px !important",
    color: "#667085 !important",
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "22px 24px !important",
  },
  chip: {
    borderRadius: 6,
    padding: "15px !important",
    fontSize: "12px !important",
  },
  circleIcon: {
    fontSize: "10px !important",
  },
  remarqueContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  remarque: {
    textAlign: "left !important",
    fontSize: "14px !important",
    color: "#667085 !important",
    fontWeight: "500 !important",
    margin: "22px 24px !important",
  },
  action: {
    margin: "22px 24px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tableAction: {
    marginLeft: "16px !important",
    margin: "22px 24px !important",
  },
  pages: {
    textAlign: "left !important",
    display: "flex",
    alignItems: "center",
    padding: "10px 0 !important",
  },
  actionButton: {
    padding: "10px 20px !important",
    borderColor: "#D0D5DD !important",
    color: "#344054 !important",
  },
}));

export default function FAS() {
  const classes = useStyles();
  const [connected, setConnected] = useState(false);
  const navigateClientLocation = event => {
    window.open('https://mybijakkewangan.akpk.org.my/', '_blank', 'noopener,noreferrer');
  }
  return (
    <DashboardLayout>
      <Grid container spacing={2} className={classes.margin}>
        <Grid item xs={12}>
          <BlueCard
            title="Financial Advisory"
            image="advisory"
            text="AKPK offers one-to-one advisory on managing personal finances wisely―from budgeting and money management to credit-related issues―helping individuals curb overspending and achieve financial goals."
            color="rgba(15, 37, 64, 0.6)"
            connected={connected}
            handleConnect={() => navigateClientLocation()}
           // handleConnect={() => setConnected(true)}
          //  handleDisonnect={() => setConnected(false)}
          />
        </Grid>
        <Grid container item xs={12}>
          <Grid xs={12} md={6} item>
            <Typography className={classes.dashboard}>FA System</Typography>
          </Grid>
          <Grid container item xs={12} md={6} spacing={4}>
            <Grid xs={12} md={6} item>
              <Button
                fullWidth
                disableElevation
                variant="contained"
                className={classes.button1}
              >
                Customer Progress
              </Button>
            </Grid>

            <Grid xs={12} md={6} item>
              <Button
                fullWidth
                disableElevation
                variant="contained"
                className={classes.button2}
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
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
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={2}>
          <Button
            classNAme={classes.filterButton}
            fullWidth
            className={classes.filter}
          >
            <FilterListIcon className={classes.filterIcon} /> Filter
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography className={classes.tableTitle}>
                  Appointment History
                </Typography>
              </Grid>
              <Grid item container xs={12} className={classes.tableHeader}>
                <Grid item xs={3}>
                  <Typography className={classes.headerContent}>
                    Date
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.headerContent}>
                    Branch
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.headerContent}>
                    Status
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.headerContent}>
                    Remarks
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.headerContent}>
                    Action
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.tableContent}>
                <Grid item xs={3}>
                  <FormControlLabel
                    className={classes.date}
                    control={
                      <Checkbox defaultChecked className={classes.checkbox} />
                    }
                    label="Jan 13, 2022"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.branch}>
                    <Typography className={classes.branchTitle}>
                      Branch
                    </Typography>
                    <Typography className={classes.branchDesc}>
                      7381 Summerhouse Lane
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box className={classes.chipContainer}>
                    <Chip
                      className={classes.chip}
                      icon={<CircleIcon className={classes.circleIcon} />}
                      label="Pending"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.remarque}>
                    $30,021.23
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.action}>
                    <ModeEditOutlineOutlinedIcon
                      className={classes.actionIcon}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.tableContent}>
                <Grid item xs={3}>
                  <FormControlLabel
                    className={classes.date}
                    control={
                      <Checkbox defaultChecked className={classes.checkbox} />
                    }
                    label="Jan 13, 2022"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.branch}>
                    <Typography className={classes.branchTitle}>
                      Branch
                    </Typography>
                    <Typography className={classes.branchDesc}>
                      7381 Summerhouse Lane
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box className={classes.chipContainer}>
                    <Chip
                      className={classes.chip}
                      icon={<CircleIcon className={classes.circleIcon} />}
                      label="Pending"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box>
                    <Typography className={classes.remarque}>
                      $30,021.23
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.action}>
                    <ModeEditOutlineOutlinedIcon
                      className={classes.actionIcon}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.tableContent}>
                <Grid item xs={3}>
                  <FormControlLabel
                    className={classes.date}
                    control={
                      <Checkbox defaultChecked className={classes.checkbox} />
                    }
                    label="Jan 13, 2022"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.branch}>
                    <Typography className={classes.branchTitle}>
                      Branch
                    </Typography>
                    <Typography className={classes.branchDesc}>
                      7381 Summerhouse Lane
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box className={classes.chipContainer}>
                    <Chip
                      className={classes.chip}
                      icon={<CircleIcon className={classes.circleIcon} />}
                      label="Pending"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box>
                    <Typography className={classes.remarque}>
                      $30,021.23
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.action}>
                    <ModeEditOutlineOutlinedIcon
                      className={classes.actionIcon}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.tableContent}>
                <Grid item xs={3}>
                  <FormControlLabel
                    className={classes.date}
                    control={
                      <Checkbox defaultChecked className={classes.checkbox} />
                    }
                    label="Jan 13, 2022"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.branch}>
                    <Typography className={classes.branchTitle}>
                      Branch
                    </Typography>
                    <Typography className={classes.branchDesc}>
                      7381 Summerhouse Lane
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box className={classes.chipContainer}>
                    <Chip
                      className={classes.chip}
                      icon={<CircleIcon className={classes.circleIcon} />}
                      label="Pending"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box>
                    <Typography className={classes.remarque}>
                      $30,021.23
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.action}>
                    <ModeEditOutlineOutlinedIcon
                      className={classes.actionIcon}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.tableContent}>
                <Grid item xs={3}>
                  <FormControlLabel
                    className={classes.date}
                    control={
                      <Checkbox defaultChecked className={classes.checkbox} />
                    }
                    label="Jan 13, 2022"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.branch}>
                    <Typography className={classes.branchTitle}>
                      Branch
                    </Typography>
                    <Typography className={classes.branchDesc}>
                      7381 Summerhouse Lane
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box className={classes.chipContainer}>
                    <Chip
                      className={classes.chip}
                      icon={<CircleIcon className={classes.circleIcon} />}
                      label="Pending"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box>
                    <Typography className={classes.remarque}>
                      $30,021.23
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.action}>
                    <ModeEditOutlineOutlinedIcon
                      className={classes.actionIcon}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.tableAction}
                xs={12}
                spacing={2}
              >
                <Grid item xs={6}>
                  <Typography className={classes.pages}>
                    Page 1 of 10
                  </Typography>
                </Grid>
                {/* <Grid item xs={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={classes.actionButton}
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={classes.actionButton}
                  >
                    Next
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
