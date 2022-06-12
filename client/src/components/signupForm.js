import "./signupForm.css";

const SignupForm = ({ signUpHandler,loginHandler }) => {
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
        <div >
          Already have an account? <a onClick={loginHandler}>Login</a>
        </div>



    </div>
  );
};

export default SignupForm;
