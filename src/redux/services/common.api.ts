import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Url } from './urlConstants';
import { IError } from './storeInterfaces';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: Url.BASE_URL,

  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    IError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,

  tagTypes: [
    'User',
  ],
  endpoints: (_) => ({}),
});
