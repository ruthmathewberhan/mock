import { forwardRef,useState } from 'react';
import * as React from 'react';
import {  Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton,  Box,
    Typography, TextField, InputLabel, MenuItem, Stack, } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles'
import './Amanager.css';
import Navbar from './Navbar';
import Button from '@mui/material/Button';  
import FormControl from '@mui/material/FormControl';


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import {useForm} from 'react-hook-form';

function VerifyPayment() {
  return (
    <div>VerifyPayment</div>
  )
}

export default VerifyPayment

