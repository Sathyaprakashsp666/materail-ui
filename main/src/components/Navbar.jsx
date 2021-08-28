import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha } from "@material-ui/core/styles";
import { Cancel, Notifications } from "@material-ui/icons";

import MailIcon from "@material-ui/icons/Mail";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "sticky",
    bottom: 0,
    top: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  search: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    padding: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">HOME</Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchBtn}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="error" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
