import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const getNewsUrl = (query: string, category: string, selectedSources: string[]) => {
  const API_URL = `https://newsapi.org/v2/top-headlines?${selectedSources.length ? "" : "country=us"}${selectedSources.length ? `sources=${selectedSources.join(",")}` : ""
    }${query ? `&q=${query}` : ""
    }${category ? `&category=${category}` : ""}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

  return API_URL;
};
