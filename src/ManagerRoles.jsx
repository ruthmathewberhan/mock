import * as React from 'react';
import { styled, Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton,  Box, Tooltip,
    Typography, Button, TextField, InputLabel, MenuItem, Stack, Card, CardActions, CardContent} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './Navbar';

const Item = styled(Paper)(({ theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ManagerRoles() {
    const [role, setRole] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setRole(event.target.value);
    };
  return (
    <>
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Container>
                <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                    Manage Roles
                </Typography>
                {/* <Stack spacing={2} marginTop={2} marginLeft='auto' direction="row" display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <TextField id="standard-basic" label="Search" variant="standard" />
                    </Box>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={role} label="role" autoWidth onChange={handleChange} required>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Adminstrator</MenuItem>
                        <MenuItem value={20}>Teacher</MenuItem>
                        <MenuItem value={30}>Student</MenuItem>
                        <MenuItem value={30}>Parent</MenuItem>
                    </Select>
                    <IconButton aria-label="delete" size="large">
                        <SearchIcon fontSize="inherit" />
                    </IconButton>
                </Stack> */}
                <Grid spacing={2} columns={12} marginTop={3} display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={4} >
                        <Box
                            sx={{
                                width: 200,
                                height: 200,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                            >
                                <img src="/assets/img/cartoon-girl.jpg" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} marginLeft={3}>
                        <Stack spacing={2} direction="row">
                            <PersonIcon/>
                            <Typography variant='h4'> Helen Abreham</Typography>
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <BuildIcon/>
                            <Typography variant='h5'> Teacher</Typography>
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <PhoneIcon/>
                            <Typography variant='h6'> +251093423271</Typography>
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <HomeIcon/>
                            <Typography variant='p'> Bole, Addis Ababa</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} marginLeft={1} alignItems="flex-end">
                        <Tooltip title="edit" placement='right'>
                            <IconButton color='secondary'>
                                <EditIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Typography variant='h6' marginTop={2}> Users Claims</Typography>
                <Stack marginTop={3} spacing={3}>
                <Card>
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <CardContent>
                                <Typography variant='h6'> Checking the attendance of students</Typography>
                            </CardContent>
                        </Grid>
                        <Grid container xs={6} alignItems="flex-end" direction="column">
                            <Grid item>
                                <CardActions>
                                    <Tooltip title="Delete" placement="right">
                                        <IconButton color='error'>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <Card>
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <CardContent>
                                <Typography variant='h6'> Adding student to classrom</Typography>
                            </CardContent>
                        </Grid>
                        <Grid container xs={6} alignItems="flex-end" direction="column">
                            <Grid item>
                                <CardActions>
                                    <Tooltip title="Delete" placement="right">
                                        <IconButton color='error'>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <Card>
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <CardContent>
                                <Typography variant='h6'> reporting students gpa to the adminstrator</Typography>
                            </CardContent>
                        </Grid>
                        <Grid container xs={6} alignItems="flex-end" direction="column">
                            <Grid item>
                                <CardActions>
                                    <Tooltip title="Delete" placement="right" >
                                        <IconButton color='error'>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                </Stack>
                <Grid container justifyContent="center" marginTop={4} marginBottom={4} >
                    <Grid item xs={5}>
                            <Button  variant="contained" color="secondary" align='center' size="large" placement="left">
                                Add Claims
                            </Button>
                    </Grid>
                    <Grid item xs={4} >
                        <Button  variant="contained" color="success" align='center' size="large" >
                            Apply
                        </Button>
                    </Grid>
                    <Grid item xs={2} alignItems="flex-end" direction="column">
                        <Button variant="contained" color="error" size="large" placement="right" >
                            Discard
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    </>
  )
}

export default ManagerRoles