import "./loginForm.css";
import TextField from '@mui/material/TextField'

const LoginForm = ({ BackHandler,LOGIN }) => {
  return (
    <div className="form">

      {/* <div className="logo">LOGO</div> */}
      <div>
      <form onSubmit={LOGIN}>

        <div>
        <TextField name="username" id="outlined-basic" label="Username" variant="outlined"  autoComplete="off" required/>
      </div>
      <div className="buffer"></div>
      <div>
        <TextField name="email" id="outlined-basic" label="Email" variant="outlined" autoComplete="off" required/>
      </div>
      <div className="buffer"></div>
      <div>
        <TextField name="password" id="outlined-basic" type="password" label="Password" variant="outlined" autoComplete="off" required />
      </div>
      <div>
        <div>

          <input type="submit" value="Login" />
        </div>
        <div></div>
        <div>No Account?   <button className="signupBtn" onClick={BackHandler}>Sign Up</button></div>

        </div>

        {/* <div className="input-container">
          <input
            type="text"
            placeholder="Username.."
            name="username"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email.."
            name="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password.."
            name="password"
            autoComplete="off"
            required
          />
        </div> */}


      </form>
      </div>



    </div>
  );
};

export default LoginForm;
