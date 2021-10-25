import styles from './Loader.module.css'
import React, { ReactElement } from 'react'

export default function Loader({
  message
}: {
  message?: string
}): ReactElement {
  return (
    <div className={styles.loaderWrap}>
      <span className={styles.loader} />
      {message && <span className={styles.message}>{message}</span>}
    </div>
  )
}