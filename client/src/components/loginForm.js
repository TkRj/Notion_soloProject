import "./loginForm.css";

const LoginForm = ({ BackHandler,LOGIN }) => {
  return (
    <div className="form">
      <form onSubmit={LOGIN}>
        <div className="input-container">
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
        </div>

        <div>
          <input type="submit" value="Login" />
        
          <button onClick={BackHandler}>Sign Up</button>
        </div>
      </form>




    </div>
  );
};

export default LoginForm;
