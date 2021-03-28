import React from 'react';
import { Container } from '@material-ui/core';
import { FooterStyles } from '../styles'

export default function Copyright() {
  const classes = FooterStyles();

  return (
    <Container className={classes.footer} maxWidth={false}>
      Developed by: apollo
    </Container>
  );
}