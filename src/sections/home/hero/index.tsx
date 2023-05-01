import cx from "classnames";
import styles from "./hero.module.scss";
import Link from "next/link";
import WaitListForm from "../waitListForm";
import dynamic from "next/dynamic";
import { useState } from "react";

const Modal = dynamic(() => import("@/components/modal"), {
  ssr: false,
});

const HomeHero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id={styles.hero}>
      <div className={styles.heroContainer}>
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
                    <stop stopColor="#F1B43D" stopOpacity="0"></stop>
                    <stop offset="0.518749" stopColor="#F1B43D"></stop>
                    <stop offset="1" stopColor="#F1B43D" stopOpacity="0"></stop>
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
          <button
            type="button"
            className={cx(styles.button, styles.primary)}
            onClick={() => setShowModal(true)}
          >
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
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.5 4H12.1667V10.6667"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
        {/* <div className="home__green green-circle" style={{ opacity: 0 }}>
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
                <stop stopColor="#18FF2F" stopOpacity="0"></stop>
                <stop
                  offset="0.518749"
                  stopColor="#18FF2F"
                  stopOpacity="0.481251"
                ></stop>
                <stop offset="1" stopColor="#18FF2F" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </div>
      <ul className={styles.navLinksMobile}>
        {[
          {
            id: 1,
            href: "https://twitter.com/wisharoo",
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0571 7.18078C21.0664 7.39198 21.0664 7.59358 21.0664 7.80478C21.0756 14.208 16.3712 21.6 7.76793 21.6C5.23048 21.6 2.73933 20.8416 0.600098 19.4208C0.970528 19.4688 1.34096 19.488 1.71139 19.488C3.81358 19.488 5.86021 18.7584 7.51789 17.4048C5.51756 17.3664 3.75802 16.0128 3.14681 14.0352C3.85063 14.1792 4.57296 14.1504 5.25826 13.9488C3.08198 13.5072 1.51691 11.52 1.50765 9.20639C1.50765 9.18719 1.50765 9.16799 1.50765 9.14879C2.15591 9.52319 2.88751 9.73439 3.62837 9.75359C1.58174 8.33278 0.942746 5.50077 2.18369 3.28317C4.5637 6.31678 8.06427 8.15038 11.8241 8.35198C11.4445 6.67198 11.9631 4.90557 13.1762 3.71517C15.0561 1.88156 18.0196 1.97756 19.7977 3.92637C20.8441 3.71517 21.8535 3.31197 22.7704 2.74556C22.4185 3.86877 21.6869 4.81917 20.7145 5.42397C21.6406 5.30877 22.5481 5.04957 23.4001 4.66557C22.7704 5.64477 21.9739 6.48958 21.0571 7.18078Z"
                  fill="#753FF6"
                  className={styles.socialIcon}
                ></path>
              </svg>
            ),
          },
          {
            id: 2,
            href: "https://t.me/pnslabs",
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.0369 11.2933C8.23838 8.59137 12.3737 6.81013 14.4428 5.94952C20.3505 3.4923 21.5781 3.06545 22.3782 3.05136C22.5542 3.04826 22.9476 3.09187 23.2025 3.29868C23.4177 3.47331 23.4769 3.70921 23.5053 3.87478C23.5336 4.04035 23.5689 4.41752 23.5408 4.71222C23.2207 8.07597 21.8355 16.2389 21.1307 20.0063C20.8325 21.6005 20.2454 22.135 19.6769 22.1873C18.4416 22.301 17.5035 21.3709 16.307 20.5866C14.4347 19.3593 13.377 18.5953 11.5596 17.3976C9.45927 16.0136 10.8208 15.2529 12.0178 14.0097C12.331 13.6843 17.774 8.73347 17.8794 8.28435C17.8926 8.22818 17.9048 8.01881 17.7804 7.90825C17.656 7.79769 17.4724 7.8355 17.34 7.86557C17.1522 7.90819 14.1612 9.88513 8.36691 13.7964C7.51793 14.3794 6.74894 14.6634 6.05995 14.6485C5.3004 14.6321 3.83932 14.2191 2.75317 13.866C1.42095 13.433 0.362128 13.204 0.454327 12.4686C0.50235 12.0855 1.02987 11.6937 2.0369 11.2933Z"
                  fill="#753FF6"
                  className={styles.socialIcon}
                ></path>
              </svg>
            ),
          },
        ].map((navItem) => (
          <li key={navItem.id}>
            <Link href={navItem.href} rel="noopener noreferrer" target="_blank">
              <div className={styles.navLink}>{navItem.icon}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <WaitListForm />
      </Modal>
    </section>
  );
};

export default HomeHero;
