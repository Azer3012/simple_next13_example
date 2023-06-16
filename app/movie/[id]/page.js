import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

import { fetchMovieApi } from "@/services/movie";

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

const MoviePage = async ({ params, searchParams }) => {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error Happened");
  }
  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
