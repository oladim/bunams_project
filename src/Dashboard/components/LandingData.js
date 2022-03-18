import React from 'react'
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from 'react-icons/ai'
import * as MdWebAsset from 'react-icons/md';
import * as RiAdminLine from 'react-icons/ri';
import * as MdSettings from 'react-icons/md';
import * as MdPeopleAlt from 'react-icons/md'

export const LandingData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Assets",
        path: "/asset",
        icon: <MdWebAsset.MdWebAsset />,
        cName: 'nav-text'
    },
    {
        title: "Admin",
        path: "/admin",
        icon: <RiAdminLine.RiAdminLine/>,
        cName: 'nav-text'
    },
    {
        title: "Settings",
        path: "/user",
        icon: <MdSettings.MdSettings/>,
        cName: 'nav-text'
    },
    {
        title: "Account",
        path: "/user",
        icon: <MdPeopleAlt.MdPeopleAlt/>,
        cName: 'nav-text',
    }
]
