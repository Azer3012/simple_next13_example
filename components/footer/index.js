import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with by&nbsp;
      <Link href="https://github.com/Azer3012" target='_blank'>
        Abishov Azer
      </Link>

    </footer>
  )
}

export default Footer