import styles from './ModalBox.module.css'

const ModalBox = ({
  title,
  clickHandler
}: {
  title: string,
  clickHandler: (isOpen: boolean) => void
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <button  className={styles.button} onClick={() => clickHandler(false)}>Ok</button>
        </div>
      </div>
    </div>
  )
}
export default ModalBox;
