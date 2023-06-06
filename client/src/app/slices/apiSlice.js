import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
    credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    headers.set("Access-Control-Allow-Origin", "*");
    // headers.set("Content-Type", "application/json");
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Admin", "Product", "Order"],
  endpoints: () => ({}),
});
