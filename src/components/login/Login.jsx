import { useState } from "react";
import "./login.css";

const Login = () => {

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    });

    const handleAvatar = e => { 
        if(e.target.files){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e => {
        e.preventDefault()
    }
    const handleRegister = e => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const {username,email,password} = Object.fromEntries(formData);

        console.log(username)
    }
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="password" name="password" id="" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image</label>
          <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
          <input type="text" name="username" id="" placeholder="Username" />
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="password" name="password" id="" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
