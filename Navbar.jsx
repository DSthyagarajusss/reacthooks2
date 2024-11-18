// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px', background: '#f0f0f0' }} className='navbar navbar-dark bg-dark navbar-expand-lg'>
           <Link to="reacthokks" className='navbar-brand'>React-hooks</Link>
 
        <div className='ml-auto'>
      <ul className='navbar-nav'>
      <Link to="/"  className='nav-link'>UseState</Link>
      <Link to="/use-effect" className='nav-link'>UseEffect</Link>
      <Link to="/use-context" className='nav-link'>UseContext</Link>
      <Link to="/use-ref" className='nav-link'>UseRef</Link>
      <Link to="/use-reducer"className='nav-link'>UseReducer</Link>
      <Link to="/use-layout-effect" className='nav-link'>UseLayoutEffect</Link>
      <Link to="/use-memo"className='nav-link'>UseMemo</Link>
      <Link to="/use-callback"className='nav-link'>UseCallback</Link>
      
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
