import { usePortal } from "@/hooks";
import styles from "./modal.module.scss";

interface ModalProps {
  showModal: boolean;
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, showModal, setShowModal }) => {
  const [Portal, removePortal] = usePortal(
    document.getElementById("portal") as Element
  );

  return showModal ? (
    <Portal>
      <section className="modal__desktop">
        <div className={styles.modalDesktopWrapper}></div>
        <div
          className={styles.modalDesktopInnerWrapper}
          style={{ opacity: 1, transform: "scale(1)" }}
        >
          <div
            className={styles.modalDesktopContainer}
            style={{ maxWidth: 600 }}
          >
            <div className={styles.modalDesktopInner}>
              <div
                className={styles.modalDesktopChild}
                style={{ maxHeight: "88vh" }}
              >
                <div className={styles.modalBody}>
                  <div
                    className={styles.homeIcon}
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      width={40}
                      height={41}
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.463257"
                        width={40}
                        height={40}
                        rx={20}
                        fill="rgba(24, 24, 24, 0.3)"
                        stroke="#2C2C2C"
                      />
                      <path
                        d="M25.9968 14.0051L14.0068 25.9951"
                        stroke="#888888"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26 26.0025L14 14"
                        stroke="#888888"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Portal>
  ) : (
    <></>
  );
};

export default Modal;
