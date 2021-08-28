import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}));

const Sidebar = () => {
  const classes = useStyles()
  return <Container className={classes.container}>Right bar</Container>
};

export default Sidebar;
