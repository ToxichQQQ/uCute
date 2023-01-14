import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useRouteError} from 'react-router-dom'

const mainTextStyles = {
  margin: '20px 0'
}

const mainHeader = {
  paddingTop: '30px'
}


export const ErrorBoundary = ()  => {
  const error: any = useRouteError()

  return <Grid container justifyContent="center"
               alignItems="center" direction='column'>
    <Grid item xs={7}>
      <Typography
        component="h3"
        variant="h3"
        style={mainHeader}
      >
        Sorry, the app has crashed
      </Typography>
    </Grid>
    <Grid item xs={7}>
    <Typography style={mainTextStyles}>{String(error)}</Typography>
      <Typography style={mainTextStyles}>You can report your issue to our support team. They will figure out what caused the application to stop and fix all errors</Typography>
      <Typography style={mainTextStyles}>Support service: storozhenko.dev@gmail.com</Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography
        component="h3"
        variant="h3"
      >
        Once again we apologize
      </Typography>
    </Grid>
  </Grid>
}
