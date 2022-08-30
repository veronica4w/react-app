import { Posts } from "../../intefaces/crud.interface"
import CardItem from "./CardItem"

interface propsCard {
  card:[Posts]
}
const Card = (props:propsCard) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',margin:'3rem'}}>
      {
       props.card &&  props.card.map((post:Posts)=>{
          return <CardItem card={post} />
        })
      }

    </div>
  )
}

export default Card