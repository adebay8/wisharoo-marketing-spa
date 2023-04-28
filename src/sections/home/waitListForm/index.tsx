import cx from "classnames";
import styles from "./waitListForm.module.scss";
import { Input } from "@/components";

const WaitListForm = () => {
  return (
    <>
      <div className={styles.waitListFormContainer}>
        <div className={styles.waitListFormHeader}>
          <h2 className={styles.waitListFormTitle}>Get early access 😎</h2>
        </div>
        <div className={styles.waitListFormDescription}>
          Join our waitlist and community to be among the first to know when we
          launch our product. 🚀
        </div>
        <form className={styles.waitListForm}>
          <div className={styles.waitListFormInputWrapper}>
            <Input name="firstName" type="text" placeholder="Jane" />
            <Input name="lastName" type="text" placeholder="Doe" />
          </div>
          <Input
            type="email"
            placeholder="onuchukwu@wisharoo.com"
            name="email"
          />
          <div className={styles.waitListFormButton}>
            <button type="submit" className={styles.button}>
              <div className={styles.buttonWrapper}>
                <div className={styles.buttonText}>Join Waitlist</div>
                <div className={styles.buttonIcon}>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 13L11.5 5"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 4H12.1667V10.6667"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
      {/* <div className="modal__image-wrapper">
        <div className="modal__image" />
      </div>
      <button
        aria-label="twitter"
        className="react-share__ShareButton"
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          font: "inherit",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        <div className="home__share">SHARE</div>
      </button> */}
    </>
  );
};

export default WaitListForm;
