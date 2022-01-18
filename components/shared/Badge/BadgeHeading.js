import styles from './sideInfo.module.css'

export default function BadgeHeading() {
    return (
      <div className={styles["badge-heading"] + " txt-xl fw-7 d-flex align-items-center"}>
          Portfolio
      </div>  
    )
}