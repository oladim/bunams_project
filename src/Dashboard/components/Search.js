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

`

