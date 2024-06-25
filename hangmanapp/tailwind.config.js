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
                kalam: ['Kalam', 'cursive'],
            },
            width: {
                120: '30rem', // 사용자 정의 크기 추가
            },
        },
    },
    plugins: [],
};
