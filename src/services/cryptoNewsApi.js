import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com/news",
    prepareHeaders: (header) => {
      header.set("X-BingApis-SDK", "true");
      header.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      header.set(
        "X-RapidAPI-Key",
        "56769bad75mshf2b747faf5ee795p13a615jsnfe7a72e2f124"
      );
      return header;
    },
  }),

  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        (`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;