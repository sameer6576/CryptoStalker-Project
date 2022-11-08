import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com/",
    prepareHeaders: (header) => {
      header.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      header.set(
        "X-RapidAPI-Key",
        "56769bad75mshf2b747faf5ee795p13a615jsnfe7a72e2f124"
      );
      return header;
    },
  }),

  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getExchanges: builder.query({
      query: () => `/exchanges`,
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => `/coin/${uuid}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        `coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),
  }),
});



export const {
  useGetCryptoQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;