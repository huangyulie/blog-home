import { useRoutes , Navigate} from "react-router-dom";
import Home from "../containers/Home/Home";
import Login from "../containers/login/Login";
import NotFound from "../containers/404/NotFound";

const useRoute = function(){
    return useRoutes([
        {path:'/home',element:<Home/>},
        {path:'/login',element:<Login/>},
        {path:'/',element:<Navigate to="/home"/>},
        {path:'*',element:<NotFound/>}
    ])// eslint-disable-next-line
}// eslint-disable-next-line

export default useRoute;