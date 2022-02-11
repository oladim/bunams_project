import React from "react";
import styled from "styled-components";
import { Login } from "./allexports";

const MainPage = () => {
    return <Wrapper>
       <Login />
    </Wrapper>
}

export default MainPage;

const Wrapper = styled.main`
display: grid;
grid-template-columns: 1fr;
width: 100%;
height: 100%;
`