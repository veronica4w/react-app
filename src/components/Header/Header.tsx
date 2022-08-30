import { Dashboard,  LocalPostOfficeOutlined } from '@mui/icons-material'
import { Breadcrumbs,  } from '@mui/material'
import React from 'react'
import * as uuid from "uuid";
import { Link } from 'react-router-dom'
import  './header.css'
import { useDispatch } from 'react-redux';
import { addUserId } from '../../redux/crudSlice';
const Header = () => {
  const dispatch = useDispatch();
    const generateUserId = () => {
    try {
      if(localStorage.getItem('userId')){
        dispatch(addUserId({userId:localStorage.getItem('userId')}))
      }
      else{
        localStorage.setItem('userId',uuid.v4())
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  React.useEffect(()=>{
    generateUserId();
  },[])
  return (
    <div style={{margin:'5%', width:'20vw',height:'1vh'}}>
       <Breadcrumbs aria-label="breadcrumb">
        <Link
        className="link"
          to="/dashboard"
        >
          <Dashboard sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
        </Link>
        <Link
        className="link"     
          to="/posts"
        >
          <LocalPostOfficeOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
          Post
        </Link>
      </Breadcrumbs>
    </div>
  )
}

export default Header