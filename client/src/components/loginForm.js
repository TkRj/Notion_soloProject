import './loginForm.css'


const LoginForm = ({loginHandler}) => {


  return (
    <div className="form">
     <form onSubmit={loginHandler}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="username" required />

       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="email" required />

       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required />

       </div>
       <div className="button-submit">
         <input type="submit" value="Login"/>
       </div>
     <div >
      <input type="submit" value="Sign Up"/>
     </div>
     </form>

   </div>
   );
}

export default LoginForm;