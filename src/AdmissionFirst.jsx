import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import {  Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton,  Box, RadioGroup, FormControlLabel, FormControl, FormLabel,
    Typography, TextField, InputLabel, MenuItem, Stack, Radio } from '@mui/material';
import Button from '@mui/material/Button';  
    
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
 import {useForm} from 'react-hook-form';
// import CheckAge from './CheckAge.js';


 const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  age: 0,
  birthDate: new Date,
  gender: '',
  placeOfBirth: '',
  nationality: '',
  grade: 0,
  email: '',
  phoneNumber: '',
  city: '',
  subCity: '',
  woreda: '',
  houseNumber: '',
  

}



function AdmissionFirst() {

    // const {
    //     values,
    //     setValues,
    //     handleInputChange,
    // } = UseForm(initialValues);

    const [date, setDate] = React.useState(null);
    const [grade, setGrade] = React.useState('');
    const [values, setValues] = React.useState(initialValues);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => console.log(data)

    // const handleInputChange = e => {
    //     const {name, value} = e.target
    //     setValues({
    //         ... values,
    //         [name]: value
    //     })
    // }

    const handleChange = (event: SelectChangeEvent) => {
      setGrade(event.target.value);
    };
  

  return (
    <>
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Container>
                <Typography variant='h2' align='center' color='textPrimary' marginTop={2} marginBottom={4}>
                    Student Admission Portal
                </Typography>
                <Typography variant='p' color='textPrimary' marginTop={2}>
                    Here please enter the basic information of the student:
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3} columns={12} marginTop={1}>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="First Name ( Student's name)" 
                            name="firstName" 
                            // value={values.firstName}
                            // onChange={handleInputChange}  
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Middle Name ( Father's Name)" 
                            name="middleName" 
                            // value={values.middleName} 
                            // onChange={handleInputChange} 
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Last Name ( Grandfather's Name)" 
                            name="lastName" 
                            // value={values.lastName} 
                            // onChange={handleInputChange} 
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Age" 
                            name="age" 
                            id='age'
                            // value={values.age} 
                            // onChange={handleInputChange} 
                            {... register('age', { 
                              required: 'Required',
                              pattern: {
                                value: /\b([0-9]|[1-9][0-9]|100)\b/,
                                message: 'Incorrect Age',
                              
                              }
                            
                            })}
                            error={!!errors.age}//{!!CheckAge}
                            helperText={errors?.age? errors.age.message : null}
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                      id='birthDate'
                                        label="Birth Date"
                                        value={date}
                                        onChange={(newDate) => {
                                        setDate(newDate);
                                        }}
                                        renderInput={(params) => <TextField fullWidth required {...params} />}
                                    />
                                </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name='gender'
                        >
                            <FormControlLabel value="female" control={<Radio required={true}/>} label="Female" />
                            <FormControlLabel  value="male" control={<Radio required={true} />} label="Male" />
                        </RadioGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Place Of Birth" 
                            name="placeOfBirth" 
                            // value={values.placeOfBirth}
                            // onChange={handleInputChange}  
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Nationality" 
                            name="nationality" 
                            // value={values.nationality}
                            // onChange={handleInputChange}  
                            required/>
                        </Grid>
                        <Grid item xs={6} marginBottom={4}>
                            <InputLabel id="demo-simple-select-helper-label">Grade Level</InputLabel>
                            <Select
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            name='grade'
                            value={grade}
                            label="grade"
                            onChange={handleChange}
                                required>
                            <MenuItem value={1}>Grade 1</MenuItem>
                            <MenuItem value={2}>Grade 2</MenuItem>
                            <MenuItem value={3}>Grade 3</MenuItem>
                            <MenuItem value={4}>Grade 4</MenuItem>
                            <MenuItem value={5}>Grade 5</MenuItem>
                            <MenuItem value={6}>Grade 6</MenuItem>
                            <MenuItem value={7}>Grade 7</MenuItem>
                            <MenuItem value={8}>Grade 8</MenuItem>
                            <MenuItem value={9}>Grade 9</MenuItem>
                            <MenuItem value={10}>Grade 10</MenuItem>
                            <MenuItem value={11}>Grade 11</MenuItem>
                            <MenuItem value={12}>Grade 12</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Typography variant='p' color='textPrimary' marginTop={2} >
                        Here please enter the address of the student:
                    </Typography>
                    <Grid container spacing={3} columns={12} marginTop={1}>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Email" 
                            name="email"  
                            type="email" 
                            // value={values.email}
                            // onChange={handleInputChange}  
                            {... register('email', { 
                              required: 'Required',
                              pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Invalid email address',
                              
                              }
                            
                            })}
                            error={!!errors?.email}
                            helperText={errors?.email ? errors.email.message : null}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Phone Number" 
                            name="phoneNumber" 
                            type="tel" 
                            // value={values.phoneNumber} 
                            // onChange={handleInputChange} 
                            {... register('phoneNumber', { 
                              required: 'Required',
                              pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                message: 'Please use the 0912****** format ',
                              
                              }
                            
                            })}
                            error={!!errors?.phoneNumber}
                            helperText={errors?.phoneNumber ? errors.phoneNumber.message : null}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="City" 
                            name="city" 
                            type='text' 
                            // value={values.city}
                            // onChange={handleInputChange}  
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Sub-City" 
                            name="subCity" 
                            type='text' 
                            // value={values.subCity}
                            // onChange={handleInputChange}   
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="Woreda" 
                            name="woreda" 
                            type='text' 
                            // value={values.woreda}
                            // onChange={handleInputChange}  
                            required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            fullWidth 
                            label="House Number " 
                            name="houseNumber"  
                            // value={values.houseNumber}
                            // onChange={handleInputChange}  
                            {... register('houseNumber', { 
                              required: 'Required field',
                              pattern: {
                                value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/,
                                message: 'Invalid house number',
                              
                              }
                            
                            })}
                            error={!!errors.houseNumber}
                            helperText={errors?.houseNumber? errors.houseNumber.message : null}
                            />
                        </Grid>
                    </Grid>    
                    <Box sx={{ marginTop: 7, marginBottom: 7}} display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" color="success" align='center' size="large" type="submit" >
                            Next <ArrowRightAltIcon/>
                        </Button>
                    </Box>   
                </form> 
            </Container>
        </React.Fragment>
      </>
  )
  
}

export default AdmissionFirst