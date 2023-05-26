import styles from "./SubmitButton.module.css";
const SubmitButton: React.FC = () => {
  return <input type="submit" value="Submit" className={styles.submitButton} />;
};
export default SubmitButton;
