import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
function Home() {
  return (
    <>
  {/* <Navbar/> */}
  <Sidebar/>
 <Box sx={{
      width: 600,
      height: 600,
      marginTop:'15%',
      border: '2px solid black',
      display: 'flex',
      alignContent:'center',
      justifyContent:'center'
    }}>
<Typography>Student</Typography>



    </Box>
    
    
    
    </>
  )
}

export default Home