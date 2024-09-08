import React from 'react';
import { Grid, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';

function Subjects() {
  return (
    <Box sx={{ mt: "15%", p: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" sx={{marginTop:10}} gutterBottom>
      Subject  Registration Form
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
          <Typography sx={{ marginTop: 3 }}>Select Group</Typography>
          <RadioGroup aria-label="subjects" name="subjects" row>
            <FormControlLabel value="GeneralScience" control={<Radio />} label="Male" />
            <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Female" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Subjects;