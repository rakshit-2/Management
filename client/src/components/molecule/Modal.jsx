import React from "react";
import styles from "./molecule.module.css";
const Modal = ({ openModal, setOpenModal }) => {
  if (!openModal) return null;
  return (
    <div>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.modalTitle}>
            <h1>Enter your Email</h1>
            <button
              onClick={() => {
                openModal === false ? setOpenModal(true) : setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className={styles.modalBody}>
            <input placeholder="Enter your email" />
          </div>

          <div className={styles.modalFooter}>
            <button>Verify</button>
            <button>Resend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
