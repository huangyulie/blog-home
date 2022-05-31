import axios from "axios";
import { BASE_URL } from "../config/config";

export const reqLogin = ()=>{
    return axios.get(`${BASE_URL}/admin/blog/list?page=1&&pagesize=12`);
}

