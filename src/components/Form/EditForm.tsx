import {  CloseSharp } from '@mui/icons-material';
import { Box, Button, Input, Modal,  Typography } from '@mui/material'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { configs } from '../../config';
import { propsEditForm } from '../../intefaces/props.interface';
import { updatePosts } from '../../redux/crudSlice';
import Loader from '../Loader/Loader';
import Toast from '../Toast/Toast';



const EditForm = (props:propsEditForm) => {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const [toast,setToast] = React.useState(false);
  const dispatch = useDispatch();
  const [loader,setLoader] = React.useState(false);
  const {id, body, title} = props.formData
  const onSubmit = async(data:any) =>{
    try {
      setLoader(true);
      console.log('data', data)
      const res = await fetch(configs.jsonApi+'/posts/'+id,{
         method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      dispatch(updatePosts({...props.formData,title:data.title,body:data.body}));
      if(res.status>=200 && res.status < 300){
        setToast(true);
        reset();
        props.setOpen(false);
      }
      setLoader(false)
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
        <h3 onClick={()=>props.setOpen(false)} style={{display:'flex',justifyContent:'flex-end',marginTop:'-3.5rem',marginRight:"-3.5rem",cursor:'pointer'}}><CloseSharp /> </h3>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update  Post
          </Typography>
           <Input
           placeholder='Title'
           inputComponent="input"
            sx={{margin:'1rem'}}
            defaultValue={title}
            {...register("title",{required:true})} 
            />
             {errors.title && <small  >This field is required *</small>}
            <Input 
            sx={{margin:'1rem'}}
            defaultValue={body}
            inputComponent="textarea"
            multiline
            rows={2}
            maxRows={6}

             placeholder='Edit your content ...'
            {...register("body", { required: true })} />
            { errors.body && <small>This field is required*</small>}
             <Button type="submit">Update</Button>
         
        </Box>
      </Modal>
      {
        toast && <Toast open={toast} message={'Successfully Updated'} handleClose={()=>setToast(false)} />
      }
      {
        loader && <Loader />
      }
    </div>
  )
}

export default EditForm