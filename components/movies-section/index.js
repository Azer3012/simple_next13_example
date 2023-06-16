import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
const MoviesSection = ({title,movies}) => {


  const getData=async()=>{
    try {
      const response=await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  getData()
  return (
    <div className={styles.moviesSection}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.movies}>
            {movies.map((movie)=>(
                <div className={styles.movie} key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>
                    <Image
                    fill
                    unoptimized
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    
                    
                    />
                    </Link>

                </div>
            ))}
        </div>

    </div>
  )
}

export default MoviesSection