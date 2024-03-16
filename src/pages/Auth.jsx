import { useState } from "react";
import axios from 'axios';
import { useCookies } from "react-cookie"
import UserErrors from "../errors/UserErrors"
import { useNavigate } from "react-router-dom"


export const AuthPage = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    await axios.post("http://localhost:5000/user/register", {
      username,
      password,
    });
    alert("Registration Completed");
    }catch(err) {
     if(err.response.data === UserErrors.USERNAME_ALREADY_EXISTS) {
       alert("Username already in use")
     }else{
        alert("Something went wrong")
     }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="auth-button">Register</button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const [_, setCookies] = useCookies(["access_token"])
   const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    const result = await axios.post("http://localhost:5000/user/login", {
      username,
      password
    });
    setCookies("access_token", result.data.token)
   localStorage.setItem("userID", result.data.userID)
   navigate("/about");
   }catch(err) {
     let errorMessage = ""
     switch (err.response.data.type) {
       case UserErrors.NO_USER_FOUND:
        errorMessage = "User doesnt exist"
        break;
        case UserErrors.WRONG_CREDENTIALS:
            errorMessage = "wrong username/password combination"
            break;
            default:
                errorMessage = "Something went wrong"
     }
               alert("ERROR:" + errorMessage);
   }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="auth-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
