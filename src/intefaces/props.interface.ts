import { Posts } from "./crud.interface";

export interface propsForm {
  open:boolean;
  setOpen:(state:boolean)=>void;
  style:any
}


export interface propsEditForm  extends propsForm {
  formData:Posts
}