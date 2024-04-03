// import './Labels.module.css';
import styles from './Labels.module.css';

function Labels(){

  return(
    <div className={styles.labelsContainer}>
      <p className={styles.labelsContent}>This is a component of lables!</p>
    </div>
  )
}

export default Labels;