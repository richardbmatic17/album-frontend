import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
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
    height: 'calc(100vh - 194px)',
  },
  paper: {
    textAlign: 'left',
  },
  form: {
    textAlign: 'center',
    "&> div": {
      width: '100%',
      marginBottom: '1rem',
    }
  }
}));

const ContactUs = (props) => {
  const classes = useStyles(props);

  return (
    <Page>
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} >
            <Paper elevation={3} className={classes.paper}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Contact Us</Typography>
                  <Box className={classes.form} component="form" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField
                      id="outlined-textarea"
                      variant="outlined"
                      label="Message"
                      multiline
                      rows={10}
                    />
                    <Button variant="outlined" size="large">Submit</Button>
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid> 
    </Page>
  )
}

export default ContactUs
