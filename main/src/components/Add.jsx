import React, { useState } from "react";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 15,
    right: 15,
  },
  cont: {
    width: 500,
    height: 550,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const Add = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* //Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.cont}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              ></TextField>
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Tell your story"
                variant="outlined"
                style={{ width: "100%" }}
              ></TextField>
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-select-currency"
                select
                label="Visibility"
                helperText="Please select your category"
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="Friends"
                  control={<Radio size="small" />}
                  label="Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="(Prmium account only)"
                />
              </RadioGroup>
            </div>

            <div className={classes.item}>
              <Button
                varaint="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setSnackbar(true)}
              >
                Create
              </Button>
              <Button
                varaint="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      {/* // Snackbar */}

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
