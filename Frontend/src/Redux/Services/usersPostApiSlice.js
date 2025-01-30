import { POSTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersPostApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `${POSTS_URL}/get-all-posts?page=${page}&limit=${limit}`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useGetAllPostsQuery } = usersPostApiSlice;
