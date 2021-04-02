import React from 'react';
import { Typography } from '@material-ui/core';
import { FooterStyles } from '../styles'


function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = FooterStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="" component="p">
        Developed by: Richard Matic
      </Typography>
      <Copyright />
    </footer>
  );
}