import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c0e59496318bb750168f85f3ae951021',
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchMovieByQuery = async keyword => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: keyword,
    },
  });
  return data.results;
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
