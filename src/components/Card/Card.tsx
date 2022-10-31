import { Posts } from "../../intefaces/crud.interface"
import Loader from "../Loader/Loader"
import CardItem from "./CardItem"

interface propsCard {
  card:[Posts],
  edit?:boolean
}
const Card = (props:propsCard) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',margin:'3rem'}}>
      {
       props.card ?  props.card.map((post:Posts)=>{
          return <CardItem data-testid="items" card={post} edit={props.edit} />
        })
        :
        <Loader data-testid="loader" />
      }

    </div>
  )
}

export default Card