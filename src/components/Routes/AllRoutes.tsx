import { Suspense } from 'react';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom'
import { RouterInterface } from '../../intefaces/routes.interface';
import routes from '../../utils/routes';
import Loader from '../Loader/Loader';


const AllRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
         {
           routes?.map((route:RouterInterface,idx:number)=>{
             const {path,element:Component,props} = route;
             return <>
                 <Route key={idx} path={path} element={<Component {...props} />}  />
             </>
           })
          }
        </Routes>
      </Suspense>
    </Router>
  )
} 

export default AllRoutes;