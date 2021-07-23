import React from 'react'
import {
  Drawer,
  Footer,
  Header,
} from '../components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(240,240,240)',
    width: '100%',
  }
}));

const _Page = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default _Page
