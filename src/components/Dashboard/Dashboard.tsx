import React from "react"
import {  useDispatch, useSelector } from "react-redux";
import { configs } from "../../config"
import { storeInterface } from "../../intefaces/store.interface";
import { addAllPosts } from "../../redux/crudSlice";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading,setLoading] = React.useState(false);
  const state = useSelector((state:storeInterface)=>state.crud.allPosts)
  const getMockData = async() => {
    setLoading(true);
    try {
      const data = await fetch(configs.jsonApi+'/posts');
      const mockData = await data.json();
      dispatch(addAllPosts(mockData));
      setLoading(false)
    } catch (error) {      
      setLoading(false)
      console.log('Error => ', error)
    }
  }

  React.useEffect(()=>{
    getMockData();
  },[])
  return (
    <div>
      {
        loading ?
         <Loader />
        :
        <>
        <Card card={state} />
        </>
      }

    </div>
  )
}

export default Dashboard