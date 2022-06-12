import "./loginForm.css";

const LoginForm = ({ signUpHandler,loginHandler }) => {
  return (
    <div className="form">
      <form onSubmit={signUpHandler}>
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
        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm Password.."
            name="confirmPassword"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <form onSubmit={loginHandler} >
        <div className="button-submit">
          Already have an account? <input type="submit" value="Login" />
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
