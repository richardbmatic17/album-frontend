import React from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Page } from '../partials'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1128px',
    overflow: 'hidden',
    width: '100%',
  },
  paper: {
    margin: '16px 0', 
    textAlign: 'left',
  },
  paperProfile: {
    padding: '0',
    margin: '16px 0',
    textAlign: 'center',
  },
  avatar: {
    height: '50px',
    margin: '0 auto',
    width: '50px',
  },
  createPost: {
    display: 'flex',
    margin: '16px 0', 
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  createPostButton: {
    borderRadius: '20px',
    marginLeft: '16px',
    width: '100%',
  },
  media: {
    height: '140px'
  },
  cardActions: {
    padding: '0',
  }
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Page>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={3} xs={12}>
          <Paper elevation={3} className={classes.paperProfile}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Avatar
                      alt="Remy Sharp"
                      src="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG"
                      className={classes.avatar}/>
                  <Typography variant="h6">
                    Richard Matic
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Senior Software Engineer at Stratpoint
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
          </Paper>
          <Paper elevation={3} className={classes.paper}>
            Recent activity section
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper elevation={3} className={classes.createPost}>
            <Avatar
              alt="Remy Sharp"
              src="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG"/>
            <Button className={classes.createPostButton} variant="outlined">Create a Post</Button>
          </Paper>
          <Paper elevation={3} className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boracay Adventure
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG"
                    title="Contemplative Reptile"
                  />
                  <Typography variant="body2" color="textSecondary" component="p">
                    This is our first time to Boracay and first time riding a plane.
                    The experience is so awesome, we'll definitely try this again.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
          </Paper>
          <Paper elevation={3} className={classes.paper}>Post 2</Paper>
          <Paper elevation={3} className={classes.paper}>Post 3</Paper>
          <Paper elevation={3} className={classes.paper}>Post 4</Paper>
          <Paper elevation={3} className={classes.paper}>Post 5</Paper>
          <Paper elevation={3} className={classes.paper}>Post 6</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper elevation={3} className={classes.paper}>Featured seciont</Paper>
          <Paper elevation={3} className={classes.paper}>Ads</Paper>
        </Grid>
      </Grid> 
    </Page>
  )
}

export default Home
