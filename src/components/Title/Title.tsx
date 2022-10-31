import React from 'react'
import AppBar from '@mui/material/AppBar';
import {  Typography } from '@mui/material';
const Title:React.FunctionComponent = () => {
  return <AppBar sx={{
    display:'flex',flexDirection:'row',
    height:"5rem",
    justifyContent:'space-around',p:2}} position='static'>
     <Typography variant='h4'>
        Crud App
      </Typography>
      <div>
      </div>
  </AppBar>
}

export default React.memo(Title);