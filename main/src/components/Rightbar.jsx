import React from "react";
import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    position: "sticky",
    top: 0,
  },
  categories: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>

      {/* Gallery */}

      <Typography gutterBottom>Galley</Typography>
      <ImageList rowHeight={130} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/plant.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/mushroom.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>

      <Typography gutterBottom>Categories</Typography>
      <div className={classes.categories}>
        <Link href="#">Sport</Link>
        <Link href="#">Food</Link>
        <Link href="#">Movies</Link>
        <Link href="#">Science</Link>
        <Link href="#">Nature</Link>
      </div>
    </Container>
  );
};

export default Sidebar;
