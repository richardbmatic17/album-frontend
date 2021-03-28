import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { ParallaxStyles } from '../styles'

export default function ContainedButtons(props) {
  const classes = ParallaxStyles(props);

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