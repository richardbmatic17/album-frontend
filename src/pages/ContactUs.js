import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  Link,
} from '@material-ui/core';

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
    textAlign: 'left',
  },
  media: {
    height: '100%',
  },
  link: {
    textDecoration: 'none !important',
  },
  ltr: {
    direction: 'ltr',
  },
  rtl: {
    direction: 'rtl',
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '30vh'
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '40vh'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: 'auto'
    },
  }
}));

const data = {
    id: '1',
    title: 'Intro',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: 'https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG',
    direction: 'ltr',
};

const ContactUs = (props) => {
  const classes = useStyles(props);

  return (
    <Page>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} >
              <Paper elevation={3} className={classes.paper}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h5">
                      Contact Us
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      asdasdasdas
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid> 
    </Page>
  )
}

export default ContactUs
