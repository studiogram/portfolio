/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{twig,php,scss}", "./blocks/**/*.{twig,php,scss}"],
    theme: {
        fontFamily: {
            sans: ['"Sailec"', "sans-serif"],
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        safelist: [],
        extend: {
            animation: {
                spin: "spin 2s linear infinite",
            },
            colors: {
                dark: "#030E21",
                blue: "#00394C",
                lightblue: "#9BD7EB",
                purple: "#453989",
                orange: "#E26643",
                green: "#015C52",
                grey: "#E8E8E9",
                lightgrey: "#F3F3F3",
                white: "#FFFFFF",
            },
            gridTemplateColumns: {
                24: "repeat(24, minmax(0, 1fr))",
            },
            gridColumn: {
                "span-13": "span 13 / span 13",
                "span-14": "span 14 / span 14",
                "span-15": "span 15 / span 15",
                "span-16": "span 16 / span 16",
                "span-17": "span 17 / span 17",
                "span-18": "span 18 / span 18",
                "span-19": "span 19 / span 19",
                "span-20": "span 20 / span 20",
                "span-21": "span 21 / span 21",
                "span-22": "span 22 / span 22",
                "span-23": "span 23 / span 23",
                "span-24": "span 24 / span 24",
            },
            gridColumnStart: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
                19: "19",
                20: "20",
                21: "21",
                22: "22",
                23: "23",
                24: "24",
            },
        },
    },
};
