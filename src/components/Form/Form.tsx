import { Box, Button, Input, Modal,  Typography } from '@mui/material'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { configs } from '../../config';
import { addPosts } from '../../redux/crudSlice';
import Toast from '../Toast/Toast';

const Form = (props:any) => {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const [toast,setToast] = React.useState(false);
  const dispatch = useDispatch();
  const onSubmit = async(data:any) =>{
    try {
      // not specified Id and UserId because it will be handled in Backend user id from req:
      const res = await fetch(configs.jsonApi+'/posts',{
         method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      dispatch(addPosts(data));
      if(res.status>=200 && res.status < 300){
        setToast(true);
        props.setOpen(false)
        reset();
      }
    } catch (error) {
      console.log('Error =>', error)
    }
  }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={()=>{
          props.setOpen(false);
                  reset();

        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={props.style}>
        <h3 onClick={()=>props.setOpen(false)} style={{display:'flex',justifyContent:'flex-end',marginTop:'-3.5rem',marginRight:"-3.5rem",cursor:'pointer'}}>X</h3>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Post
          </Typography>
           <Input
           placeholder='Title'
           inputComponent="input"
            sx={{margin:'1rem'}}
            {...register("title",{required:true})} 
            />
             {errors.title && <small color='red' >This field is required *</small>}
            <Input 
            sx={{margin:'1rem'}}
            inputComponent="textarea"
             placeholder='Body'
            {...register("body", { required: true })} />
            { errors.body && <small>This field is required*</small>}
             <Button type="submit">Post</Button>
         
        </Box>
      </Modal>
      {
        toast && <Toast open={toast} message={'Successfullt Saved'} handleClose={()=>setToast(false)} />
      }
    </div>
  )
}

export default Form