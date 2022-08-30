import { Component } from "react";
export interface RouterInterface {
  path:string,
  element:any | Component;
  props?:any
} 
