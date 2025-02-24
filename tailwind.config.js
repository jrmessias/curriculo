/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    screens: {
        screen: {"raw": "screen"},
        print: {"raw": "print"},
        xsm: "500px",
        sm: "640px",
        md: "811px",
        lg: "1051px",
        xl: "1280px",
    },
    theme: {
        extend: {
            lineHeight: {
                snugish: "1.32",
                normal: "1.34",
            },
            fontFamily: {
                sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
                serif: ['"PT Serif"', ...defaultTheme.fontFamily.serif],
                mono: ['"PT mono"', ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                'lg': '1.25rem',
                '4xl': '2.50rem',
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}

