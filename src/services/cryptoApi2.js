import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "56769bad75mshf2b747faf5ee795p13a615jsnfe7a72e2f124",
};
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
const createRequest = (url) => ({url , header:cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: https:'//coinranking1.p.rapidapi.com/coins' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => fetchBaseQuery({ baseUrl, fetchBaseQuery }),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

