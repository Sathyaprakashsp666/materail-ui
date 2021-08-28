import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    objectFit: "contain",
  },
  card: {
    marginBottom: theme.spacing(6),
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="My post"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My first post
          </Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
            nunc, ullamcorper nec lacus ac, vestibulum suscipit nisi. Phasellus
            imperdiet risus orci, eu placerat nibh aliquam sed. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc orci nunc,
            ullamcorper nec lacus ac, vestibulum suscipit nisi. Phasellus
            imperdiet risus orci, eu placerat nibh aliquam sed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
