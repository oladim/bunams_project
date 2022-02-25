import styled from "styled-components";
import image from './bu01.PNG';
import { Link } from "react-router-dom";

const Login = () => {
    const validateUser = (e) => {
        e.preventDefault();
    }
    return <Wrapper>
      <div className="login-back">
    <div className="form-container">
    <img src={image}   height={500} width={400} />
          <form method="POST" onSubmit={validateUser}>
            <h6 className="text-center"><strong>Sign</strong> in</h6>
             
           
             <div className='form-group'>
                 <label htmlFor="email" className='form-label'> Email </label><br />
                 <input  type="email" name="email" id="email"  className="form-control" />
             </div>
             <div className='form-group'>
                 <label htmlFor="password"> Password </label><br />
                 <input  type="password" name="password" id="password"  className="form-control" />
             </div>
             <span className='rememberme'><a href="">Remember me</a></span>
             <span className='forgetpassword'><a href="">Forgot password</a></span>
             <Link to="/dashboard"><input type="submit" value="SIGN IN"  className='btn-primary'/></Link>
             <span className='forgetpassword'> <p className='regpara'>Don't have an account  <a href="" className='register'>Register </a></p></span>
     </form>
     </div>
</div>
    </Wrapper>
}

export default Login;

const Wrapper = styled.div`
body{
    font-family: 'Campton';
    background: #f1f7fc; 
}
.login-back {
    padding: 80px 0;
    margin: 10% auto;
    display: block;
}

.login-back .form-container {
    display: flex;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
   /*  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1) */
}

.login-back form {
    display: table-cell;
    width: 400px;
    background-color: #ffffff;
    padding: 40px 60px;
    color: #505e6c
}

@media (max-width:991px) {
    .login-back form {
        padding: 40px
    }
}

.login-back form h6 {
    font-size: 25px;
    line-height: 1.5;
    margin-bottom: 30px;
}

.rememberme{
    margin-right: 90px;
    margin-left: 10px;
    font-size: 10px;
    text-decoration: none;
}

.forgetpassword{
    font-size: 10px;
    text-decoration: none;
    margin-left: 15px;
}

.register{
    font-size: 10px;
    text-decoration: none;
    margin-left: 10px;
    color: green;
}

.regpara {
    margin-left: 50px;
}



.rememberme a:link{
    text-decoration: none;
    color: #505e6c;
}

.forgetpassword a:link{
    text-decoration: none;
    color: #505e6c;
}


.login-back form .form-control {
    background: transparent;
    border: 1px solid #dfe7f1;
    border-bottom: 1px solid #dfe7f1;
    margin-bottom: 5px;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    color: inherit;
    text-indent: 0px;
    height: 25px;
    width:60%;
}

.login-back form .form-group{
 margin-top: 5px;
}

.form-label{
    margin-right: 10px;
   }

.login-backform .form-check {
    font-size: 13px;
    line-height: 20px
}

.login-back form .btn-primary {
    background: #275785;
    border: none;
    border-radius: 4px;
    padding: 11px;
    box-shadow: none;
    margin-top: 35px;
    text-shadow: none;
    outline: none !important;
    color:#dfe7f1 ;
    width: 250px;
}

.login-back form .btn-primary:hover,
.login-back form .btn-primary:active {
    background: rgb(6,57,112);
}

.login-back form .btn-primary:active {
    transform: translateY(1px)
}

.login-back form .already {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #6f7a85;
    opacity: 0.9;
    text-decoration: none
}
`

