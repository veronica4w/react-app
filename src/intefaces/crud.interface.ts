export interface stateInterface {
  allPosts:[Posts];
  myPosts:[Posts]
}

export interface Posts {
  id:number,
  userId:number|string,
  title:string;
  body:string
}