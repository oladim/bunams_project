import React, {useState} from 'react';
import styled from "styled-components";
//import * as FaIcons from "react-icons/fa"; 
//import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom';
import {LandingData} from './LandingData'
import './Landing.css';
import './Search.css';
import { IconContext } from 'react-icons'
import imageLogo from './bunamsBabcock.png';
import Search from './Search';

const Landing = () => {
    const [sidebar, setSidebar] = useState(true);

   
    return <div className='Wrapper'>
        <div className='sidebar'>
            <IconContext.Provider value={{color: '#fff'}}>
                
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                    <img src={imageLogo} className='SidebarLogo' height= {100} width={100} alt="Logon"/>
                        {LandingData.map((item, index) =>{
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                </IconContext.Provider>
            </div>
            <div className='main_content'>
                <div className='header'> <Search /> </div>
                <div className='info'>
                    
                    <div className= "row">
                    
                </div>
                    
                </div>
            </div>
            </div>
    
}

export default Landing

// const Wrapper = styled.div`

// `;
