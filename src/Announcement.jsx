import React from 'react';
import Navbar from './Navbar';
import { styled, Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton,  Box,
  Typography, Button, TextField, InputLabel, MenuItem, Stack} from '@mui/material';
  import Card from '@mui/material/Card';
  import CardActionArea from '@mui/material/CardActionArea';
  import CardContent from '@mui/material/CardContent';


function Announcement() {
  return (
    <>
    <React.Fragment>
      <CssBaseline/>
      <Navbar/>
      <Container>
      <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
          Assesments
      </Typography>
      <Grid container spacing={3} columns={12} marginTop={1} display="flex">
        <Grid item xs={12} sm={6} md={8}> 
          <Card sx={{ boxShadow: 10 }}>
            <CardContent>
              <Typography variant='h4' color='textSecondary'>
                  Announcement 1
              </Typography>
              <Typography variant='p' color='textSecondary'>
              Although cards can support multiple actions, UI controls, and an overflow menu, 
              use restraint and remember that cards are entry points to more complex and detailed 
              information.Although cards can support multiple actions, UI controls, and an overflow 
              menu, use restraint and remember that cards are entry points to more complex and detailed 
              information.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}> 
          <Card sx={{ boxShadow: 10 }}>
            <CardActionArea sx={{ height: 180 }}>
            <CardContent>
              <Typography variant='h4' color='textSecondary'>
                  Set Assesment  weight
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={8}> 
          <Card sx={{ boxShadow: 10 }}>
            <CardActionArea sx={{ height: 180 }}>
            <CardContent>
              <Typography variant='h4' color='textSecondary'>
                  View Assesment
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}> 
          <Card sx={{ boxShadow: 10 }}>
            <CardActionArea sx={{ height: 180 }}>
            <CardContent>
              <Typography variant='h4' color='textSecondary'>
                  Submit Assesment
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}> 
          <Card sx={{ boxShadow: 10 }}>
            <CardActionArea sx={{ height: 180 }}>
            <CardContent>
              <Typography variant='h4' color='textSecondary'>
                  Assesment Report
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>    
      </Container>
    </React.Fragment>

    </>
  )
}

export default Announcement