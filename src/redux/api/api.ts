import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TypeApi } from './TypeApi';

export const sneakersApi = createApi({
	reducerPath: 'sneakersApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://646cb4927b42c06c3b2bd66e.mockapi.io/sneakersData' }),
	endpoints: (builder) => ({
		getSneakers: builder.query<TypeApi[], string>({ query: () => '' }),
	}),
});

export const { useGetSneakersQuery } = sneakersApi;
