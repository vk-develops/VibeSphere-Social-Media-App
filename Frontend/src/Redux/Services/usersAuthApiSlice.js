import { AUTH_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersAuthApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}/logout`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),

        isLoggedIn: builder.query({
            query: () => ({
                url: `${AUTH_URL}/isloggedin`,
                method: "GET",
                credentials: "include",
            }),
        }),
        // Google login initiation (optional, usually handled by redirect)
        googleLoginRedirect: builder.query({
            query: () => ({
                url: `${AUTH_URL}/auth/google`,
                method: "GET",
                credentials: "include",
            }),
        }),

        // Handle the Google OAuth callback if necessary
        googleLoginCallback: builder.mutation({
            query: (code) => ({
                url: `${AUTH_URL}/auth/google/callback`,
                method: "GET",
                credentials: "include",
                params: { code },
            }),
        }),
    }),
    overrideExisting: true,
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useIsLoggedInQuery,
    useGoogleLoginRedirectQuery,
    useGoogleLoginCallbackMutation,
} = usersAuthApiSlice;
