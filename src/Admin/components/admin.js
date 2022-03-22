// import { useState } from "react";
import styled from "styled-components";
import { Landing } from "../../allexports";
import {MenuItem, Select, ListItemIcon, ListItemText  } from "@mui/material";
// import { green } from "@mui/material/colors";
// import { BiUserPin } from 'react-icons/bi';
// import { ImUserPlus } from 'react-icons/im';
// import { BsFillInfoCircleFill } from 'react-icons/bs';
// import { RiDeleteBin2Fill } from 'react-icons/ri';
import { buttonUserData, buttonGroupData } from "./buttonsData";
import BasicTable from "./tablecontent";



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    borderColor: '#FF0000',      //<------------ this does nothing
  },
  
}));


const CustomSelect = styled(Select)`
background-color: #004084;
width: 180px;
height: 40px;
`
const CustomSelectGroup = styled(Select)`
width: 180px;
height: 40px;
`
const CustomMenuItem = styled(MenuItem)`
color: white;
border-color: 1px solid green;
align-items: center;
display: inline-flex;

`

const ListItemTextModified = styled(ListItemText)`
margin-left: -12px;
font-size: 10px;
color: black;
`

export const AdminPage = () => {
    const classes = useStyles();
// const [textValue, setTextValue] = useState("Ten");
//     const handleChange = (e) => {
//         e.preventDefault();

//     }
    return <Wrapper>
    <Landing />
    <div className="headingdetails">
    <div>Here is the asset page</div>
    <div className="usersgroup">
    <CustomSelect defaultValue={10} className="iconsItem">
      {buttonUserData.map((data)=>{
        const {text, icon, value} = data;
        console.log(text);
        return <CustomMenuItem value={value} divider={true} className={classes.menuitems} key={data.id}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemTextModified>{text}</ListItemTextModified>
          </CustomMenuItem>
      })}
    </CustomSelect>

    <CustomSelectGroup defaultValue={10} className="iconsItemGroup">
    {buttonGroupData.map((data)=>{
        const {text, icon, value} = data;
        return <CustomMenuItem value={value} divider={true} className={classes.menuitems} key={data.id}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemTextModified>{text}</ListItemTextModified>
          </CustomMenuItem>
      })}
    </CustomSelectGroup>


    </div>
    
    <div className="usersHeading">
      <BasicTable />
    </div>
   
    </div>
    
    </Wrapper>
}

const Wrapper = styled.div`
display: grid;
grid-template-columns: 250px auto;
gap: 20px;
.headingdetails{
    display: grid;
    grid-template-rows: 200px auto;
  
    .iconsItem > svg{
      color: white;
      border-left: 1px white solid;
      transform: none;
      height: 100%;
      top: 0;
  }
  .iconsItemGroup > svg{
    color: #004084;
    border-left: 1px #004084 solid;
    transform: none;
    height: 100%;
    top: 0;
    
  
}
  .usersgroup{
    display: flex;
    gap: 15px;
  }

  .iconSize{
    font-size:20px;
    color: white;
  }
  .MuiSelect-select{
  align-items: center;
  display: inline-flex;
}
.css-10hburv-MuiTypography-root{
  color: white;
  font-size: 12px;
}
.iconsItemGroup .css-10hburv-MuiTypography-root{
  color: #004084;
  font-size: 12px;
}

.usersHeading{
  margin-top: 20px;
  width: 90%;
  elevation: 5px;
}

.heading{
  width: 100%;
  align-items: center;
  background-color: #E8E8E8;
  height: 45.1px;
  font-weight: 700;
 

  div{
    font-size: 14px;
    font-weight: 400;
    font-family: Campton;
    line-height: 12px;
    border-style: solid;
    border-color: rbga(211, 211, 211, 0.05);
    border-width: 1px;
    color: #676767;

   
    p{
      margin-left: 10px;
    }
  }
}
}
`
