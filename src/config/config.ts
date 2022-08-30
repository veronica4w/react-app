import { configInterface } from "../intefaces/config.interface";

export class Config {
  public jsonApi:string;
  constructor(configValues:configInterface){
    this.jsonApi = configValues.jsonApi;
  }
}
