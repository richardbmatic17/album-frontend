import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  GridList,
  GridListTile,
  IconButton,
  Link,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  Favorite,
  Share,
  LocationOn,
} from '@material-ui/icons';

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
  },
  link: {
    textDecoration: 'none !important',
  }
}));

const posts = [
  {
    id: '1',
    title: 'Boracay Adventure',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG'
  },
  {
    id: '2',
    title: 'Random Post 1',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: '3',
    title: 'Random Post 2',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://source.unsplash.com/random'
  },
  {
    id: '4',
    title: 'Random Post 3',
    description: 'This is our first time in Boracay and first time riding a plane. The experience is so awesome, we\'ll definitely try this again.',
    image: 'https://source.unsplash.com/random'
  },
];

const tileData = [
  {
    id: 1,
    img: 'https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG',
    title: 'Boracay Adventure',
    author: 'author',
    cols: 1,
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/random',
    title: 'Sinagtala Adventure',
    author: 'author',
    cols: 2,
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/random',
    title: 'Grand Cafe 1919',
    author: 'author',
    cols: 2,
  },
  {
    id: 4,
    img: 'https://source.unsplash.com/random',
    title: 'fort santiago',
    author: 'author',
    cols: 1,
  },
  {
    id: 5,
    img: 'https://source.unsplash.com/random',
    title: 'Ramen Kuroda',
    author: 'author',
    cols: 3,
  },
];

const Blog = (props) => {
  const classes = useStyles();

  return (
    <Page>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={9} xs={12}>
          {posts.map(post => (
            <Paper elevation={3} className={classes.paper} key={post.title}>
              <Card className={classes.root}>
                <Link href={'/blog/' + post.id} className={classes.link}>
                  <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <CardMedia
                          className={classes.media}
                          image={post.image}
                          title={post.title}
                        />
                        <Typography variant="body2" color="textSecondary" component="p">
                          {post.description}
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton aria-label="add to favorites"><Favorite /></IconButton>
                  <IconButton aria-label="share"><Share /></IconButton>
                  <IconButton aria-label="Location"><LocationOn /></IconButton>
                </CardActions>
              </Card>
            </Paper>
          ))}
          <GridList cellHeight={300} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.id} cols={tile.cols || 1} xs={100}>
                  <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList> 
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper elevation={3} className={classes.createPost}>
            <Button className={classes.createPostButton} variant="outlined">Update Blog Post</Button>
          </Paper>
          <Paper elevation={3} className={classes.paper}>Comment Section</Paper>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" color="textSecondary" component="p">
              This is our first time in Boracay and first time riding a plane. The experience is so awesome, we'll definitely try this again.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  )
}

export default Blog
