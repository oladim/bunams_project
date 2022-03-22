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

   
    return <Wrapper>
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
           
            </Wrapper>
    
}

export default Landing

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    position: relative;

    .sidebar{
    position: fixed;
    width: 200px;
    height: 100%;
    background:  #004084;
    }
.sidebar img{
    align-items: center;
    margin-bottom: 30px;
    margin-top: 50px;
}
 .sidebar ul li{
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0,0.05);
    border-bottom: 1px solid rgba(225, 225, 225,0.05);
}
 .sidebar ul li a{
   color: #bdb8d7;
   display: block;
}
 .sidebar ul li .fas{
  width: 25px;
 }
 .sidebar ul li:hover{
    background: rgb(30,87,172);
   }
  .sidebar ul li:hover a{
    color: #fff;
   }
 .main_content{
       width: 100%;
       margin-left: 200px;
   }
    .main_content .header{
    padding: 20px;
    background: #fff;
    color: #717171;
    border-bottom: 1px solid #e0e4e8;
}
 .main_content .info{
    margin: 20px;
    color: #717171;
    line-height: 25px;
}
 .main_content .info div{
    margin-bottom: 20px;
    padding: 30px;
}
span{
    margin-left: 16px;
}
.nav-text{
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
}
.nav-text a{
    text-decoration: none;
    display: flex;
    align-items: center;
    border-radius: 4px;
}
`;
