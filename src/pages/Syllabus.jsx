import React from 'react';
import { Grid, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';

function Syllabus() {
  return (
    <Box sx={{ mt: "15%", p: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" sx={{marginTop:10}} gutterBottom>
      Syllabus Registration Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            required
            id="Name"
            label="Subect Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            required
            id="LastName"
            label="Class"
            variant="outlined"
            placeholder="Enter Your Class"
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Add Syllabus
          </Button>
          
          
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Upload  Syllabus
          </Button>
          
          
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Syllabus;