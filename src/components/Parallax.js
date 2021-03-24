import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bgParallax: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: props => `url(${props.parallaxImage})`,
    minHeight: '100vh',
    display: 'flex',
  },
  span: {
    padding: '20px',
    backgroundColor: 'black',
    opacity: '.5',
    color: 'white',
    fontSize: 'x-large',
    fontWeight: '900',
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.bgParallax}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Link href={props.link}>
          <span className={classes.span}>
            {props.parallaxMessage}
          </span>
        </Link>
      </Grid>
    </div>
  );
}
