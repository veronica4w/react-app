import { Card, CardContent, Typography } from '@mui/material'
import { Posts } from '../../intefaces/crud.interface'

interface propsCardItem {
  card: Posts
}
const CardItem = (props:propsCardItem) => {
  const { title,body  } = props.card
  return (
    <div>
      <Card sx={{ maxWidth: 345 , display:'flex',margin:'1rem'}}>
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