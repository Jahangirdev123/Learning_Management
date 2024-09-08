import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import SMInput from '../components/input';
import SMbutton from "../components/button"
import { useState } from 'react';
import lms from '../components/lms.png'

import {useNavigate}from 'react-router-dom'
export default function Login() {
   const [userObj,setUserObj]=useState({})
   const [loader,setLoader]=useState(false)
   const navigate=useNavigate();
 const loginUser=()=>{
    navigate("/Home") 
 }
 
    return (
        <>
        <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Box sx={{display:"flex",alignContent:"center", height:"70vh" , marginTop:"140px"}}>
     

        <Card sx={{ maxWidth: 500}}>
        <Typography variant="h5" sx={{color:'Green',marginLeft:10}}> LMS Login</Typography>
        <CardMedia sx={{borderRadius:20}}
            component="img"
            height="100"

            image={lms}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingLeft:10}}>
                User Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <SMInput onChange={(e)=>setUserObj({...userObj,email:e.target.value})} type="email" label="Enter Email"/>
        
            </Typography>
            <Typography pt={2}variant="body2" color="text.secondary">
        
            <SMInput onChange={(e)=>setUserObj({...userObj,password:e.target.value})} type="password" label="Enter Password"/>
            </Typography>
        </CardContent>
        <CardActions>
        <SMbutton loading={loader}  onClick={()=>{loginUser()}} label="LogIn" variant="contained"/>
        <SMbutton loading={loader} onClick={()=>{loginUser()}} label="SignUp" variant="contained"/>
 
        </CardActions>
    </Card></Box></Grid></Grid></>
    
      
   
    );
    
}
