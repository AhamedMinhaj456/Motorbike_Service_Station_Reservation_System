import React, {useState}from "react";
import {Link} from 'react-router-dom';
import "./Login.css"
import Sideimg from '../../src/assets/bike4.png'

const Login =() =>{
  
  const [user,setUser] = useState({
    email : '',
    password : ''

});

const handleInput = (event) =>{
    let name = event.target.name
    let value = event.target.value
    
    setUser({...user,[name]:value})
}


const handleSubmit = async(event) =>{
    event.preventDefault();
    const{email, password} = user;
    try{
        const res = await fetch('/login',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email,password
            })
        });
        if(res.status === 400 || !res ){
            window.alert("Invalid Credentials")
        }else{
            window.alert("Login Successfull");
            window.location.reload();
        }
    } catch(error){
        console.log(error);

    }

}
 
  
    return(
       
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">LOG IN</div>
              <form onSubmit={handleSubmit}>
              <div className="div-5">
              
              
             
              <label htmlFor="exampleInputUserName" className="form label">User Name</label>
              <input type="email" className="form-control"   placeholder="Enter Username"
                                name = "username"
                               value = {user.username}
                               onChange={handleInput}/>
             
             

              <label htmlFor="exampleInputPassword1" className="form label">Password</label>
                                <input type="password" className="form-control"  placeholder="Enter Password"
                                name = "password"
                                value = {user.password}
                                onChange={handleInput} />
              
              <div className="div-9">
                <div className="div-10"> 
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label></div>
                <Link to="/forgetpw" className="div-11">
                  Forget Password
                </Link>
                
              </div>
              </div>
              </form>
              <button className="div-12 ">Log in</button>
              <div className="div-13">
                <div className="div-14" />
                <div className="div-15">Or</div>
                <div className="div-16" />
              </div>
              <div className="div-17">
                <div className="div-18">Don’t have an account?</div>
                <Link to="/register" className="div-19">Click here</Link>
              </div>
            </div>
          </div>
          <div className="column-2">
            <img  className="img" alt="Some meaningful description" src={Sideimg} />
          </div>
        </div>
      </div>
   
    )
}

export default Login;