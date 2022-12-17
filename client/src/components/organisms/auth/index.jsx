import * as React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { InputField as IField } from "../../atoms/InputField";
import Modal from "../../molecule/Modal";
import styles from "./auth.module.css";

const Auth = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleLogin = async (e) => {
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({email:,pass:});
    });
  };
  return (
    <>
      <div className={styles.outer_container}>
        <aside className={styles.left_box}>
          <div className={styles.credential_container}>
            <div className={styles.heading_container}>
              <h1> Welcome back, Olivia</h1>
              <p>Welcome back! Please enter your details.</p>
            </div>
            <div className={styles.log_with_google_container}>
              <button type={styles.submit}>
                <div className={styles.google_icon}>
                  <FcGoogle size={"23px"} />
                </div>
                <p>Log in With Google</p>
              </button>
            </div>
            <p className={styles.horizontal_line}>or</p>
            <main className={styles.inner_container}>
              <form onSubmit={handleLogin}>
                <IField type="email" name="email" placeholder="Email" />
                <IField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className={styles.forgot_pass_container}>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <span className={styles.remember_box}>
                    Remember for 1 week
                  </span>
                  <span
                    className={styles.forgot_password_box}
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
                <button className={styles.login_btn} type="submit">
                  Log in
                </button>
                <Modal />
              </form>
            </main>
          </div>
        </aside>
        <aside className={styles.right_box}>
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
