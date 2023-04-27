import cx from "classnames";
import styles from "./hero.module.scss";

const HomeHero = () => {
  return (
    <section id="hero">
      <div className={styles.homeContainer}>
        <div className={styles.homeTitle}>
          <div className={styles.homeTitleInner}>
            <h1 className={styles.homeTitleText}>
              Shop, share, and make your dreams come true.
            </h1>
            <div
              className={cx(styles.homeYellow, styles.yellowCircle)}
              style={{ opacity: 0.0003 }}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4.00012"
                  cy="4"
                  r="3.5"
                  fill="#151111"
                  stroke="#F1B43D"
                ></circle>
              </svg>
            </div>
            <div
              className={cx(styles.homeYellow, styles.yellowLine)}
              style={{
                opacity: 0,
                left: "89.063%",
              }}
            >
              <svg
                width="100"
                height="2"
                viewBox="0 0 100 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 1L2.26498e-06 1"
                  stroke="url(#paint0_linear_1835_5234)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1835_5234"
                    x1="100"
                    y1="1.5"
                    x2="0"
                    y2="1.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F1B43D" stop-opacity="0"></stop>
                    <stop offset="0.518749" stop-color="#F1B43D"></stop>
                    <stop
                      offset="1"
                      stop-color="#F1B43D"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <p className={styles.homeDescription}>
            Discover new products, share your wishlists with friends and family,
            and even raise funds to support your dreams
          </p>
        </div>
        <div className={styles.homeButtonWrapper}>
          <button type="button" className={cx(styles.button, styles.primary)}>
            <div className={styles.buttonWrapper}>
              <div className="button__text">Join Waitlist</div>
              <div className={styles.buttonIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 13L11.5 5"
                    stroke="#DFB791"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.5 4H12.1667V10.6667"
                    stroke="#DFB791"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="home__green green-circle" style={{ opacity: 0 }}>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="4"
              cy="4"
              r="3.5"
              fill="#151111"
              stroke="#18FF2F"
            ></circle>
          </svg>
        </div>
        <div className="home__green green-line" style={{ opacity: 0 }}>
          <svg
            width="2"
            height="151"
            viewBox="0 0 2 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0L1.00001 151"
              stroke="url(#paint0_linear_1835_5231)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1835_5231"
                x1="1.5"
                y1="-2.18557e-08"
                x2="1.50001"
                y2="151"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18FF2F" stop-opacity="0"></stop>
                <stop
                  offset="0.518749"
                  stop-color="#18FF2F"
                  stop-opacity="0.481251"
                ></stop>
                <stop offset="1" stop-color="#18FF2F" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
