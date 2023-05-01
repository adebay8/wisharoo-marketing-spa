import cx from "classnames";
import styles from "./input.module.scss";
import _ from "lodash";

interface InputProps {
  name: string;
  className?: string;
  placeholder?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, type }) => {
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
      />
      <p className={styles.error}>{_.startCase(name)} is required</p>
    </div>
  );
};

export default Input;
