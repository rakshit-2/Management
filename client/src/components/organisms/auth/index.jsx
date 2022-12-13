import "./index.css";
import * as React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { InputField as IField } from "../../atoms/InputField";
import Modal from "../../molecule/Modal";
const Auth = () => {
  const [openModal, setOpenModal] = useState(false);
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
                <IField type="email" name="email" placeholder="Email" />
                <IField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="forgot_pass_container">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <span className="remember_box">Remember for 1 week</span>
                  <span
                    className="forgot_password_box"
                    onClick={() => {
                      openModal === false
                        ? setOpenModal(true)
                        : setOpenModal(false);
                    }}
                  >
                    <u>Forgot&nbsp;Password</u>
                  </span>
                </div>
                <Modal openModal={openModal} setOpenModal={setOpenModal} />
                <button className="login_btn" type="submit">
                  Log in
                </button>
                <Modal />
              </form>
            </main>
          </div>
        </aside>
        <aside className="right_box">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_gjmecwii.json"
            background="transparent"
            speed="1"
            style={{ width: "700px", height: "600px" }}
            loop
            autoplay
          ></lottie-player>
        </aside>
      </div>
    </>
  );
};

export default Auth;
