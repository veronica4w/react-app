import { createSlice } from "@reduxjs/toolkit";
import { Posts } from "../intefaces/crud.interface";

const crudSlice = createSlice({
  name:'crud',
  initialState:{
    allPosts:[],
    userPost:[],
    userId:''
  },
  reducers:{
    addAllPosts:(state,action)=> {
      let data :any =  [...state.userPost,...action.payload]
      state.allPosts = data
    },
    addUserId:(state,action) => {
      state.userId = action.payload.userId
    },
    addPosts:(state,action) => {
      let data :any = [{...action.payload,id:state.userPost.length+1,userId:state.userId},...state.userPost];
      state.userPost = data
    },
    updatePosts:(state,action)=>{
      let data:any =  state.userPost.map((post:Posts)=>{
        return post.id===action.payload.id ? {...post,...action.payload} :post
      })
      state.userPost = data
    } 

   
  }
});

export const { addAllPosts , addUserId, addPosts ,updatePosts} = crudSlice.actions
export default crudSlice.reducer;