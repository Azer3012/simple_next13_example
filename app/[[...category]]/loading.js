import CategoriesLoading from '@/components/categories/loading'
import FeatureMovieLoading from '@/components/featured-movie/loading'
import MovieLoading from '@/components/movies-section/loading'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <FeatureMovieLoading/>
        <CategoriesLoading/>
        <MovieLoading/>
        <MovieLoading/>
        <MovieLoading/>
    </div>
  )
}

export default Loading