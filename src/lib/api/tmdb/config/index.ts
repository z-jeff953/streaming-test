export const FEATURED_SHOW = 94997;

const NEXT_PUBLIC_THE_MOVIE_DB_V3_API_KEY = "52f8a846d429b7909489c77504bfc58e"
const NEXT_PUBLIC_THE_MOVIE_DB_V3_BASE_URL = "https://api.themoviedb.org/3"

export const tmdbConfig = {
  host: NEXT_PUBLIC_THE_MOVIE_DB_V3_BASE_URL,
  apiKey: NEXT_PUBLIC_THE_MOVIE_DB_V3_API_KEY,
  imageHost: "https://image.tmdb.org/t/p",
};

export const getTmdbHost = () => {
  const host = tmdbConfig.host;

  if (!host) {
    throw new Error("NEXT_PUBLIC_THE_MOVIE_DB_V3_BASE_URL is undefined");
  }

  return tmdbConfig.host;
};

export const getTmdbApiKey = () => {
  const host = tmdbConfig.host;

  if (!host) {
    throw new Error("NEXT_PUBLIC_THE_MOVIE_DB_V3_API_KEY is undefined");
  }

  return tmdbConfig.apiKey;
};

export const db = <T>(endpoint: string, params = ""): Promise<T> => {
  console.log(`${getTmdbHost()}${endpoint}?api_key=${getTmdbApiKey()}${params}`)
  return fetch(`${getTmdbHost()}${endpoint}?api_key=${getTmdbApiKey()}${params}`).then(res =>
    res.json()
  );
};
