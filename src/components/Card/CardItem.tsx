import { Edit } from '@mui/icons-material'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Posts } from '../../intefaces/crud.interface'
import { formStyle } from '../../utils/formStyle'
import EditForm from '../Form/EditForm'

interface propsCardItem {
  card: Posts,
  edit?:boolean
}
const CardItem = (props:propsCardItem) => {
  const [show,setShow] = React.useState(false);
  const { title,body } = props.card
  return (
    <div>
      <Card sx={{ maxWidth: 655, width:'22rem',height:'15rem' , display:'flex',flexDirection:'column',margin:'1rem',boxShadow:'3px 3px 5px'}}>
        {props.edit &&
          <div onClick={()=>{setShow(true)}} style={{display:'flex',justifyContent:'flex-end',width:'100%',margin:'2px',cursor:'pointer' }}>
          <Edit />
        </div>}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {body}
        </Typography>
        </CardContent>
        
        
      </Card>
      {
        show && <EditForm open={show} setOpen={setShow} style={formStyle} formData={props.card} />
      }
    </div>
  )
}

export default CardItem
