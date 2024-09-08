import React from 'react';
import { Grid, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';

function TeacherRegistration() {
  return (
    <Box sx={{ mt: "15%", p: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" sx={{marginTop:10}} gutterBottom>
      Teacher Registration Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            required
            id="Name"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            required
            id="LastName"
            label="Last Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            type='email'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            required
            id="class"
            label="Class"
            variant="outlined"
            type='password'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ marginTop: 3 }}>Gender</Typography>
          <RadioGroup aria-label="gender" name="gender" row>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TeacherRegistration;