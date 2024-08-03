/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./Screens/**/*.{js,jsx,ts,tsx}",
        "./Components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "purple--50": "#ecf2ff",
                "purple--100": "#dde8ff",
                "purple--200": "#c2d4ff",
                "purple--300": "#9cb6ff",
                "purple--400": "#758dff",
                "purple--500": "#5465ff",
                "purple--600": "#363af5",
                "purple--700": "#2a2bd8",
                "purple--800": "#2528ae",
                "purple--900": "#262b89",
                "purple--950": "#161750",
                "bgColor-light": "#fafafa",
                "bgColor-dark": "#050505",
                "headerColor-light": "#1e1e1e",
                "paraColor-light": "#5e5e5e",
                white: "#ffffff",
            },
        },
    },
    plugins: [],
};
