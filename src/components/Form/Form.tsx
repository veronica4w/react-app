import { CloseSharp } from '@mui/icons-material';
import { Backdrop, Box, Button, Input, Modal,  Typography } from '@mui/material'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { configs } from '../../config';
import { propsForm } from '../../intefaces/props.interface';
import { addPosts } from '../../redux/crudSlice';
import Loader from '../Loader/Loader';
import Toast from '../Toast/Toast';

const Form = (props:propsForm) => {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const [toast,setToast] = React.useState(false);
  const dispatch = useDispatch();
  const [loader,setLoader] = React.useState(false);
  const onSubmit = async(data:any) =>{
    try {
      setLoader(true)
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
      setLoader(false)
    } catch (error) {
      console.log('Error =>', error)
    }
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}

        open={props.open}
        onClose={()=>{
          props.setOpen(false);
                  reset();

        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={props.style}>
        <h3 onClick={()=>props.setOpen(false)} style={{display:'flex',justifyContent:'flex-end',marginTop:'-3.5rem',marginRight:"-3.5rem",cursor:'pointer'}}><CloseSharp /> </h3>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Post
          </Typography>
           <Input
           placeholder='Title'
           inputComponent="input"
            sx={{margin:'1rem'}}
            {...register("title",{required:true})} 
            />
             {errors.title && <small data-testid="error" >This field is required *</small>}
            <Input 
            sx={{margin:'1rem'}}
            inputComponent="textarea"
            multiline
            rows={2}
            maxRows={6}
             placeholder='Body'
            {...register("body", { required: true })} />
            { errors.body && <small data-testid="error">This field is required*</small>}
             <Button variant='contained' data-testid="post"  type="submit">Post</Button>
         
        </Box>
      </Modal>
      {
        toast && <Toast open={toast} message={'Successfully Saved'} handleClose={()=>setToast(false)} />
      }
      {
        loader && <Loader />
      }
    </div>
  )
}

export default Form