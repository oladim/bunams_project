import styled from "styled-components";

const Login = () => {
    return <Wrapper>
      <div class="login">
          Welcome to Bunams
      </div>
      <p>Asset Management System</p>
    </Wrapper>
}

export default Login;

const Wrapper = styled.div`
margin-top: 25%;
margin-left: auto;
margin-right: auto;
justify-content: center;
.login{
    color: blue;
    line-height: 2px;
    font-size: 50px;
    font-weight: bold;
}
p{
    text-align: center;
    font-size: 30px;
    color: blue;
}
`

