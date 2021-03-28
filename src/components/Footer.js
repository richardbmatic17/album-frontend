import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '20px 0',
    background: 'black',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    maxWidth: '100%',
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Container className={classes.footer}>
    Developed by: apollo
    </Container>
  );
}