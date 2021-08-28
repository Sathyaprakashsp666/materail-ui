import { Grid } from "@material-ui/core";
import React from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Sidebar from "./Rightbar";
import Feed from "./Feed";
import { makeStyles } from "@material-ui/core";
import Add from "./Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Sidebar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default Home;
