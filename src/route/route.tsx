import { useRoutes } from "react-router-dom";
import Hello1 from '../components/Home/Home1';
import Hello2 from '../components/Home/Home2';
import Hello3 from '../components/Home/Home3'

export default function(){
    return useRoutes([
        {path:'/Home1',element:<Hello1/>},
        {path:'/Home2',element:<Hello2/>,children:[
            {path:"Home3",element:<Hello3/>}
        ]},
    ])
}