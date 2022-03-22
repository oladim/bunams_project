import styled from "styled-components";
import * as AiOutlineSearch from 'react-icons/ai';
import * as MdOutlineDoorbell from 'react-icons/md';
import * as VscBellDot from 'react-icons/vsc';
import * as MdOutlineDarkMode from 'react-icons/md';
import { Grid } from "@mui/material";
import profileImage from './profileimage.PNG';

const Search = () => {
   
    return <Wrapper>
    <nav class="header">
        <div>
        <img src={profileImage} height={40} width={35} alt="Profileimage"/>
           <ul>
            <li>Akinola Seun</li>  
            <VscBellDot.VscBellDot className="bell-notification" />
            <MdOutlineDarkMode.MdOutlineDarkMode className="mode-switch" />      
           </ul>
        </div>

        <form class="search-form">
            <div className="search-box">
                <button><AiOutlineSearch.AiOutlineSearch className="search-icon" /></button>
                <input type="text" className="" placeholder="Search.." />
            </div>
        </form>  
        <div className="name-bar" ><p>All Assets</p></div>  
    </nav>
          </Wrapper>
}

export default Search;

const Wrapper = styled.div`
body{
    background-color: skyblue;
    margin: 0;
}
.header{
   width: 100%;
   background: #142b47;
   overflow: auto;
}

.header .name-bar{
    width: 98%;
    height: 35px;
    background: #004084;
    margin-top: 80px;
    color: white;
}
.header .name-bar p{
    margin: 15px;
    padding-top: 3px;
}
.header ul{
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 60px;
}
.header li{
    float: right;
    margin-right: 20px;
}
.header img{
   margin-left: 20px;
}
.bell-notification{
    float: right;
    margin-right: -210px;
    margin-top: 25px;
}
.mode-switch{
    float: right;
    margin-right: -250px;
    margin-top: 25px;
}
.header ul li a{
    background: #142b47;
    text-decoration: none;
    width: 130px;
    display: block;
    text-align: center;
    color: #f2f2f2;
    font-size: 18px;
    font-family: sans-serif;
    letter-spacing: 0.5px;
}
.header ul li span{
    color: #f2f2f2;
    font-size: 18px;
    font-family: sans-serif;
    letter-spacing: 0.5px;
}
.header img{
   width: 50px;
   height: 50px;
   float: right;
   margin-top: 5px;
   margin-right: 200px;
}
.header li a:hover{
    background: #fff;
    opacity: 0.5;
    font-size: 19px;;
}
.search-form{
    margin-top: 15px;
    float: left;
    margin-left: 8px;
}
input[type=text]{
    padding: 7px;
    border: none;
    font-size: 16px;
    font-family: sans-serif;
    border: none;
    outline: none;
    font-size: 18px;
    padding-left: 10px;
    margin-left: 25px;
    border-radius: 0 10px 10px 0;
    width: 300px;
    height: 40px;
}
.search-box button{
    float: left;
    background-color: #275785;
    height: 43px;
    width: 70px;
    color: white;
    border-radius:  30px 0px 0px 30px;
    cursor: pointer;
    position: relative;
    padding: 7px;
    font-family: sans-serif;
    border: none;
    font-size: 16px;
    margin-left: -25px;
}
.search-box{
    width: 400px;
    height: 2px;
    border-radius: 0 30px 30px 0;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #dfe7f1;
    border-bottom: 2px solid #dfe7f1;
    margin-bottom: 5px;
}

`

