
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Seivces from './router/pages/Seivces'
import Home from './router/pages/Home'
import About from './router/pages/About'
import Axios_Class from './users_axios/Axios_Class.jsx'
let App = ()=>{

    return <div>
     <Router>
        <nav class='navbar navbar-dark bg-dark navbar-expand-lg'>
         <Link to='/index' className='navbar-brand' >Logo</Link>
         <div className="ml-auto">
            <ul className='navbar-nav'>
                <li><Link to='/index' className='nav-link'>home</Link></li>
                <li><Link to='/about' className='nav-link'>about</Link></li>
                <li><Link to='/serives'className='nav-link'>serives</Link></li>
                <li><Link to='/Users'className='nav-link'>User</Link></li>
            </ul>
         </div>
        </nav>

        <Routes>
       <Route path="index" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="serives" element={<Seivces/>}/>
       <Route path="Users" element={<Axios_Class/>}/>
     </Routes>
       
        </Router>
    
    
        
    </div>
}
export default App