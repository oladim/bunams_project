import { BiUserPin } from 'react-icons/bi';
import { ImUserPlus } from 'react-icons/im';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdGroup } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';



export const buttonUserData = [
    {
        id: 1,
        text: "Users",
        icon: <BiUserPin className="iconSize"/>,
        color: "",
        value: 10,
    },
    {
        id: 2,
        text: "Add User",
        icon: <ImUserPlus className="iconSize" color="#038400"/>,
        color: "",
        value: 20,
    },
    {
        id: 3,
        text: "Modify User",
        icon: <BsFillInfoCircleFill className="iconSize" color="#575757"/>,
        color: "",
        value: 30,
    },
    {
        id: 4,
        text: "Delete User",
        icon: <RiDeleteBin2Fill className="iconSize" color="#FF0000"/>,
        color: "",
        value: 40,
    },
]

export const buttonGroupData = [
    {
        id: 1,
        text: "Groups",
        icon: <MdGroup className="iconSize" color="#004084"/>,
        color: "",
        value: 10,
    },
    {
        id: 2,
        text: "Add Group",
        icon: <AiOutlineUsergroupAdd className="iconSize" color="#038400"/>,
        color: "",
        value: 20,
    },
    {
        id: 3,
        text: "Modify Group",
        icon: <BsFillInfoCircleFill className="iconSize" color="#575757"/>,
        color: "",
        value: 30,
    },
    {
        id: 4,
        text: "Delete Group",
        icon: <RiDeleteBin2Fill className="iconSize" color="#FF0000"/>,
        color: "",
        value: 40,
    },
]