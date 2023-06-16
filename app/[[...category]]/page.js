"use client";
import HomeContainer from "@/containers/home";

import { fetchMovieApi } from "@/services/movie";

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", "page=1");
};
const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", "page=1");
};
const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", "page=1");
};

async function Home({ params }) {
  let selectedCategory;

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();

  const categoriesPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);

    selectedCategory = results;
  }

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory?.slice(0, 7) : [],
      }}
    />
  );
}

export default Home;
