const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                gray: colors.coolGray,
                blue: colors.lightBlue,
                red: colors.rose,
                pink: colors.fuchsia,
            },
            fontFamily: {
                caveat: ['Caveat', 'cursive'],
                grandstander: ['Grandstander', 'cursive'],
            },
            theme: {
                extend: {},
            },
            plugins: [],
        },
    },
    plugins: [],
};
