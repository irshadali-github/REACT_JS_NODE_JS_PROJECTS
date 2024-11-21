import React,{useState} from "react";
import { redirect } from 'react-router-dom';
import axios from "axios";
import "./Login.css";
function SignUp() {
    const [login,setLogin] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:"",
        rePassword:""
    });
    const [isRegister,setIsRegister] = useState(false);
    function handleChange(event){
        const {name,value}=event.target;
        setLogin((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }
    async function handleClick(event){
      debugger;
        console.log("clicked");
    try{
        const url='http://localhost:4000/data'
        await axios.get(url)
        .get((response)=>{
            console.log(response);
                setIsRegister(true);
                redirect('/notes')
        })
    }catch(err){
        console.log(err);
    }
    }
  return (
    <div className="container signup-container">
      <div className="card signup-card">
        <div className="card-title signup-title">
          <h1>Sign Up</h1>
        </div>
        <div className="card-body">
          <form className="form-control" method="post">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={login.firstName}
                    id="firstName"
                    placeholder="enter firsht name"
                  />
                  <label for="firstName">First Name</label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={login.lastName}
                    id="lastName"
                    placeholder="enter last name"
                  />
                  <label for="lastName">Last Name</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input onChange={handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                    value={login.email}
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={login.phoneNumber}
                    id="phoneNumber"
                    placeholder="enter the phone number"
                  />
                  <label for="phoneNumber">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="password"
                    value={login.password}
                    id="password"
                    placeholder="enter the passwoed"
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating mb-3">
                  <input onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="rePassword"
                    value={login.rePassword}
                    id="rePassword"
                    placeholder="Reenter the password"
                  />
                  <label for="rePassword">Repassword</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <button onClick={handleClick}  className="btn btn-success form-control" >Submit</button>
              </div>

              <div className="col-12 col-md-6">
                <button  className="btn btn-success form-control" >Back To Privious Page</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
