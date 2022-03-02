import styled from "styled-components";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { LandingData } from './LandingData';
import SubMenu from './SubMenu';

const Landing = () => {
   const [sidebar, setSidebar] = useState(false)
   const showSidebar = () => setSidebar(!sidebar)
    return <Wrapper>
    <div>
    <Nav>
         <NavIcon to="#">
             <FaIcons.FaBars onClick={showSidebar}/>
         </NavIcon>
     </Nav>
     <SidebarNav  sidebar={sidebar}>
         <SidebarWrap>
         <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar}  />
         </NavIcon>
         {LandingData.map((item, index) =>{
            return <SubMenu item = {item} key ={index} />;
         })}
         </SidebarWrap>
     </SidebarNav>
    </div>
    </Wrapper>
}

export default Landing;

const Wrapper = styled.div`

`
const Nav = styled.div`
   background: #fff;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   top: 0;
`

const NavIcon = styled(Link)`
   margin-left: 2rem;
   font=size: 2rem;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`
const SidebarNav = styled.nav`
  background:  #004084;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar })  => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`
const SidebarWrap = styled.div`
   width: 100%;
`


