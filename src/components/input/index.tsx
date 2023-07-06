import cx from "classnames";
import styles from "./input.module.scss";
import _ from "lodash";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  touched?: boolean;
};

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  error,
  touched,
  ...props
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>
        {_.startCase(name)}
      </label>
      <input
        id={name}
        className={cx(styles.inputField, styles.error)}
        placeholder={placeholder}
        type={type}
        name={name}
        {...props}
      />
      {error && touched && (
        <p className={styles.error}>
          {_.startCase(name)} {error}
        </p>
      )}
    </div>
  );
};

export default Input;
