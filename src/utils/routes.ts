import { NavDashboard } from "../components/Navbar/NavDashboard";
import NavUserPosts from "../components/Navbar/NavUserPosts";


const routes = [
  {
    path: '/',
    element: NavDashboard,
  },
   {
    path: '/dashboard',
    element: NavDashboard,
  },
   {
    path: '/posts',
    element:NavUserPosts
  },
]

export default routes;