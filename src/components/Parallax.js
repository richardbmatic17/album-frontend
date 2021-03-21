import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bgParallax: {
    position: 'relative',
    opacity: 0.65,
    'background-attachment': 'fixed',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-image': props => `url(${props.parallaxImage})`,
    "min-height": '100vh',
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.bgParallax}>
      asdasdasdas
    </div>
  );
}
