import { POSTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersPostApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: (page, limit) => ({
                url: `${POSTS_URL}/get-all-posts`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useGetAllPostsQuery } = usersPostApiSlice;
