import cx from "classnames";
import styles from "./waitListForm.module.scss";
import { Input } from "@/components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_WAITLIST_USER } from "@/graphql/gql";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction } from "react";

const WaitListForm: React.FC<{
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
  const [mutateFunction] = useMutation(CREATE_WAITLIST_USER, {
    fetchPolicy: "network-only",
  });

  const createListSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "too Short!").required("is required"),
    lastName: Yup.string().min(2, "too Short!").required("is required"),
    email: Yup.string().email().required("is required"),
  });

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
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={createListSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            mutateFunction({
              variables: {
                ...values,
              },
            })
              .then(() => {
                setSubmitting(false);
                setShowModal(false);
                resetForm({
                  values: { firstName: "", lastName: "", email: "" },
                });
                toast.success(
                  "Welcome, you have been added to the wishlist. You will be the first to know when launch!",
                  {
                    theme: "colored",
                  }
                );
              })
              .catch(() => {
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className={styles.waitListForm}
              noValidate
              onSubmit={handleSubmit}
            >
              <div className={styles.waitListFormInputWrapper}>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  error={errors.firstName}
                  touched={touched.firstName}
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  error={errors.lastName}
                  touched={touched.lastName}
                />
              </div>
              <Input
                type="email"
                placeholder="onuchukwu@wisharoo.com"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={touched.email}
              />
              <div className={styles.waitListFormButton}>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={isSubmitting}
                >
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
          )}
        </Formik>
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
