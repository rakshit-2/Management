import React from "react";
import { useState } from "react";
import InputField from "../../atoms/InputField";
import styles from "./auth.module.css";

const ChangePassword = () => {
  const [info, setinfo] = useState({
    password: "",
  });

  const [passwordStrength, setpasswordStrength] = useState("");
  const checkPassword = (s) => {
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
    if (regExpStrong.test(s)) {
      setpasswordStrength("strong");
    } else if (regExpMedium.test(s)) {
      setpasswordStrength("medium");
    } else if (regExpWeak.test(s)) {
      setpasswordStrength("weak");
    } else {
      setpasswordStrength("");
    }
  };
  const handleOnChange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      checkPassword(e.target.value);
    }
  };
  const handleConfirmPassword = (e) => {};
  return (
    <>
      <div className={styles.outer_container}>
        <aside className={styles.left_box}>
          <div className={styles.credential_container}>
            <div className={styles.heading_container}>
              <h1>Change Your Password</h1>
              <p>Please enter old and new password.</p>
            </div>

            <div className={styles.inner_container}>
              <form>
                <input
                  type="text"
                  required
                  name="oldpassword"
                  placeholder="Enter old password"
                />
                <input
                  type="password"
                  name="password"
                  required
                  minLength={6}
                  onChange={handleOnChange}
                  value={info.password}
                  placeholder="Enter new Password"
                />
                <div className={styles.password_tip_container}>
                  <div
                    style={{
                      backgroundColor:
                        passwordStrength === "strong"
                          ? "red"
                          : passwordStrength === "medium"
                          ? "red"
                          : passwordStrength === "weak"
                          ? "red"
                          : "rgb(171, 167, 167)",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor:
                        passwordStrength === "strong"
                          ? "orange"
                          : passwordStrength === "medium"
                          ? "orange"
                          : "rgb(171, 167, 167)",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor:
                        passwordStrength === "strong"
                          ? "green"
                          : "rgb(171, 167, 167)",
                    }}
                  ></div>
                </div>
                <div
                  className={styles.pass_intelligence}
                  style={{
                    color:
                      passwordStrength === "strong"
                        ? "green"
                        : passwordStrength === "medium"
                        ? "orange"
                        : passwordStrength === "weak"
                        ? "red"
                        : "transparent",
                  }}
                >
                  {info.password.length > 0
                    ? passwordStrength.charAt(0).toUpperCase() +
                      passwordStrength.slice(1) +
                      " password"
                    : ""}
                  <br />
                  {info.password.length < 8
                    ? "Password should be more than 8 characters "
                    : ""}
                </div>

                <input
                  type="password"
                  name="confirmpassword"
                  required
                  minLength={6}
                  onChange={handleConfirmPassword}
                  placeholder="Confirm Password"
                />
                <button className={styles.login_btn} type="submit">
                  Change
                </button>
              </form>
            </div>
          </div>
        </aside>
        <aside className={styles.right_box}>
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_jmtf164z.json"
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

export default ChangePassword;
