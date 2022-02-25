import React from 'react'
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri'

export const LandingData = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Class room',
        path:'/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Subject',
        path:'/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Students',
        path:'/students',
        icon: <IoIcons.IoMdPeople/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'nav-text',
        subNav: [
            {
                title: 'Add student',
                path:'/students/add student',
                icon: <IoIcons.IoMdPeople/>,
            },
            {
                title: 'Edit student',
                path:'/students/edit student',
                icon: <IoIcons.IoMdPeople/>,
            },
        ]
    },
    {
        title: 'Result',
        path:'/messgas',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Parents',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Exam',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Exam type',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Attendance',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Teacher',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }, 
    {
        title: 'Department',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]
