import * as React from 'react';
import { styled, Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton,  Box,
    Typography, Button, TextField, InputLabel, MenuItem, Stack} from '@mui/material';

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

import Navbar from './Navbar';
import {useForm} from 'react-hook-form';
import { SliderValueLabelUnstyled } from '@mui/base';


function ResetPassword() {

    const [values, setValues] = useState({
        newPassword: '',
        currentPassword: '',
        showNewPassword: false,
        confirmNewPassword: '',
        showCurrentPassword: false,
        showConfirmNewPassword: false
      })
    
      // Handle Current Password
      const handleCurrentPasswordChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
      }
    
      const handleClickShowCurrentPassword = () => {
        setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
      }
    
      const handleMouseDownCurrentPassword = event => {
        event.preventDefault()
      }
    
      // Handle New Password
      const handleNewPasswordChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
      }
    
      const handleClickShowNewPassword = () => {
        setValues({ ...values, showNewPassword: !values.showNewPassword })
      }
    
      const handleMouseDownNewPassword = event => {
        event.preventDefault()
      }
    
      // Handle Confirm New Password
      const handleConfirmNewPasswordChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
      }
    
      const handleClickShowConfirmNewPassword = () => {
        setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
      }
    
      const handleMouseDownConfirmNewPassword = event => {
        event.preventDefault()
      }

      const {register, handleSubmit, formState: {errors}} = useForm();
      const onSubmit = (data) => console.log(data);

      // check the new and old password
       const checkPassword = () => {
        var isValid = true;
        if (typeof OutlinedInput["account-settings-new-password"] !== "undefined" && typeof OutlinedInput["account-settings-confirm-new-password"] !== "undefined") {

          

          if (OutlinedInput["account-settings-new-password"] != OutlinedInput["account-settings-confirm-new-password"]) {
      
            isValid = false;
            
            console.log(' password dont match');
            // errors["account-settings-new-password"] = "Passwords don't match.";
      
          }
      }
      }


  return (
    <>
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Container>
                <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                    Reset Password
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} columns={12} marginTop={1}>
                    <Grid item xs={12} sm={6} md={6}>
                        <OutlinedInput fullWidth placeholder="UserName" id="userName" required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                            <OutlinedInput
                                required
                                fullWidth
                                placeholder='Current Password'
                                value={values.currentPassword}
                                id='account-settings-current-password'
                                type={values.showCurrentPassword ? 'text' : 'password'}
                                onChange={handleCurrentPasswordChange('currentPassword')}
                                endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                edge='end'
                                aria-label='toggle password visibility'
                                onClick={handleClickShowCurrentPassword}
                                onMouseDown={handleMouseDownCurrentPassword}
                                >
                                {values.showCurrentPassword ? <EyeOutline /> : <EyeOffOutline />}
                                </IconButton>
                            </InputAdornment>
                            }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <OutlinedInput
                            required
                            fullWidth
                            placeholder='New Password'
                            value={values.newPassword}
                            id='account-settings-new-password'
                            onChange={handleNewPasswordChange('newPassword')}
                            type={values.showNewPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                edge='end'
                                onClick={handleClickShowNewPassword}
                                aria-label='toggle password visibility'
                                onMouseDown={handleMouseDownNewPassword}
                                >
                                {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <OutlinedInput
                            required
                            fullWidth
                            placeholder='Confirm New Password'
                            value={values.confirmNewPassword}
                            id='account-settings-confirm-new-password'
                            type={values.showConfirmNewPassword ? 'text' : 'password'}
                            onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                            endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                edge='end'
                                aria-label='toggle password visibility'
                                onClick={handleClickShowConfirmNewPassword}
                                onMouseDown={handleMouseDownConfirmNewPassword}
                                >
                                {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                                </IconButton>
                            </InputAdornment>
                            }
                            // {... register('password', { 
                            //   validate: checkPassword
                            
                            // })}
                            // error={!!errors?.phoneNumber}
                            // helperText={errors?.phoneNumber ? errors.phoneNumber.message : null}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: 7, marginBottom: 7}} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" color="success" align='center' size="large" type="submit" onClick={checkPassword()}>
                        Reset
                    </Button>
                </Box> 
              </form>
            </Container>
        </React.Fragment>
    </>
  )
}

export default ResetPassword