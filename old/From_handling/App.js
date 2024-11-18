
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Seivces from './router/pages/Seivces'
import Home from './router/pages/Home'
import About from './router/pages/About'
import Axios_Class from './users_axios/Axios_Class.jsx'
import Login from "./From_handling/Login.jsx";
import Reg from "./From_handling/Reg.jsx";

let App = ()=>{

    return <div>
     <Router>
        <nav class='navbar navbar-dark bg-dark navbar-expand-lg '>
         <Link to='/index' className='navbar-brand' >Logo</Link>
         <div className="ml-auto">
            <ul className='navbar-nav'>
                <li><Link to='/index' className='nav-link'>Home</Link></li>
                <li><Link to='/about' className='nav-link'>About</Link></li>
                <li><Link to='/serives'className='nav-link'>Serives</Link></li>
                <li><Link to='/Users'className='nav-link'>User</Link></li>
                <li><Link to='/Login'className='nav-link'>Login</Link></li>
                <li><Link to='/reg'className='nav-link'>Regitration</Link></li>
              
            </ul>
         </div>
        </nav>

        <Routes>
       <Route path="index" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="serives" element={<Seivces/>}/>
       <Route path="Users" element={<Axios_Class/>}/>
       <Route path="Login" element={<Login/>}/>
       <Route path="reg" element={<Reg/>}/>
      
     </Routes>
       
        </Router>
    
    
        
    </div>
}
export default App