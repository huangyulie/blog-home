import { useRoutes } from "react-router-dom";
import Login from "../containers/login/Login";

const useRoute = function(){
    return useRoutes([
        {path:'/login',element:<Login/>}
    ])// eslint-disable-next-line
}// eslint-disable-next-line

export default useRoute;