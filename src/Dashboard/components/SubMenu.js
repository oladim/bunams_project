import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SidebarLink  = styled(Link)`
   dsplay: flex;
   color: #e1e9fc;
   justify-content: space-between;
   align-items: center;
   padding: 20px;
   list-style: none;
   height: 60px;
   text-decoration: none;
   font-size: 18px;
   &:hover{
       border-left: 4px solid #275785;
       corsor: pointer;
   }
`;
const SidebarLabel = styled.span` 
   margin-left: 16px;
`;

const SidebarIcon = styled.span` 
   margin-left: 50px;
`;
    const SubMenu = ({ item }) =>{
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return( 
        <>
           <SidebarLink to={item.path} ocClick={item.subNav && showSubnav}>
               <div>
                   <SidebarIcon>{item.icon}</SidebarIcon> 
                   <SidebarLabel>{item.title}</SidebarLabel>
               </div>
               <div>
                   {item.subNav && subnav 
                   ? item.iconOpened 
                   : item.subNav 
                   ? item.iconClosed 
                   : null}
               </div>
           </SidebarLink>
        </>
    );
};

export default SubMenu