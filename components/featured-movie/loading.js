import React from 'react'
import styles from './styles.module.css'
import LoadingComponent from '../loading'
const FeatureMovieLoading = () => {
  return (
    <div style={{height:278}} className={styles.movieWrapper}>
        <LoadingComponent/>
    </div>
  )
}

export default FeatureMovieLoading