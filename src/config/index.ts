import { configInterface } from "../intefaces/config.interface";
import { Config } from "./config";
const configValues:configInterface = {
    jsonApi: process.env.REACT_APP_URL||'https://jsonplaceholder.typicode.com'
}
export const configs: Config = new Config(configValues);
export default configValues;
