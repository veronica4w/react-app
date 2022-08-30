import { Posts, stateInterface } from "./crud.interface";

export interface actionInterface {
  id?:number;
  payload:[stateInterface] | stateInterface | Posts
}


export interface storeInterface {
  crud:any
}