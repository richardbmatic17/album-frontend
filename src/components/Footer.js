import React from 'react';
import { Typography } from '@material-ui/core';
import { FooterStyles } from '../styles'


function Copyright() {
  return (
    <Typography align="center">
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
      <Typography align="center">
        Developed by: Richard Matic
      </Typography>
      <Copyright />
    </footer>
  );
}