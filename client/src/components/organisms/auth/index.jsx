import "./index.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Auth = (props) => {
  return (
    <>
      <div className="outer_container">
        <aside className="left_box">
          <div className="credential_container">
            <div className="heading_container">
              <h1> Welcome back, Olivia</h1>
              <p>Welcome back! Please enter your details.</p>
            </div>
            <div className="log_with_google_container">
              <button type="submit">
                <div className="google_icon">
                  <FcGoogle size={"23px"} />
                </div>
                <p>Log in With Google</p>
              </button>
            </div>
            <p className="horizontal_line">or</p>
            <main className="inner_container">
              <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <div className="forgot_pass_container">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <label className="remember" for="remember">
                    Remember for 1 week
                  </label>
                  <span>
                    <Link to="/forgotPassword">Forgot Password</Link>
                  </span>
                </div>
                <button className="login_btn" type="submit">
                  Log in
                </button>
              </form>
            </main>
          </div>
        </aside>
        <aside className="right_box"></aside>
      </div>
    </>
  );
};

export default Auth;
