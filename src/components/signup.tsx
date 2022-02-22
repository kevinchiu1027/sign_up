import React from 'react'
import { Avatar, Grid, Paper, Typography, Button } from '@mui/material'
import { TextField } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const Signup = () => {
const paperStyle={padding: '30px 20px', width: 300, margin: '20px auto'}
const headerStyle={margin: 0}
const avatarStyle={backgroundColor: '#cd04abd9'}
const marginTop={marginTop:10}

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name'/>
                    <TextField fullWidth label='Email' placeholder='Enter your email'/>

                    <FormControl style={marginTop}>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" style={{display: 'initial'}}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth label='Phone Number' placeholder='Enter your phone number'/>
                    <TextField fullWidth label='Password' placeholder='Create a password'/>
                    <TextField fullWidth label='Confirm Password' placeholder='Confirm new password'/>

                    <FormControlLabel control={<Checkbox/>} label="I accept the terms and conditions" />
                    
                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;