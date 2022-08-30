import { createSlice } from "@reduxjs/toolkit";

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
    }
   
  }
})

export const { addAllPosts , addUserId, addPosts} = crudSlice.actions
export default crudSlice.reducer;