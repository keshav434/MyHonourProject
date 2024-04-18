import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './Layout.css'


const Header = () => { 
    return(
        <div className="header-sub">
            <nav className='myNav'>
            
            <div>
          
            </div>
            <div>
            
            </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Header;