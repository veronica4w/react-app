import { Card, CardContent, Typography } from '@mui/material'
import { Posts } from '../../intefaces/crud.interface'

interface propsCardItem {
  card: Posts
}
const CardItem = (props:propsCardItem) => {
  const { title,body  } = props.card
  return (
    <div>
      <Card sx={{ maxWidth: 655, width:'22rem',height:'15rem' , display:'flex',margin:'1rem',boxShadow:'3px 3px 5px'}}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {body}
        </Typography>
        </CardContent>
        

      </Card>
    </div>
  )
}

export default CardItem