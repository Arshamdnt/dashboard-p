import Home from'./pages/home/Home'
import UserList from'./pages/Users/UserList'
import Products from'./pages/Products/Products'
import Product from './pages/Product/Product'
import Analytics from './pages/Analytics/Analytics'
import Feedback from './pages/Feedback/Feedback'
import UserInteractionReport from './pages/Reports/Reports'
import Management from './pages/Management/Management'
import About from './pages/about/about'
let routes = [
    {path: '/', element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/products', element: <Products />},
    {path: '/products/product/:productID', element: <Product/>},
    {path: '/Analytics', element: <Analytics />},
    {path: '/Feedback', element: <Feedback />},
    {path: '/Reports', element: <UserInteractionReport/>},
    {path: '/Management', element: <Management />},
    {path: '/About', element: <About/>},
    
]

export default routes