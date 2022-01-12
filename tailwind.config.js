module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'gridcoin': '30px .8fr 50px .5fr .8fr 60px 60px 60px 250px',
                'gridcoinsm': '20px 1.2fr .8fr 40px',
            },
            keyframes: {
                'rotate': {
                    '0%': {
                        '-webkit-transform': 'rotate(0deg)',
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        '-webkit-transform': 'rotate(360deg)',
                        transform: 'rotate(360deg)',
                    },
                },
            },
            animation: {
                'rotate-slow': 'rotate 15s linear infinite',
            },
            boxShadow: {
                'bs1': '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)',
                'bs2': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
                'bs3': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                'bs4': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                'bs5': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
                'bs5': 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px'
            },
            backgroundImage: {
                'light-blue': 'linear-gradient(180deg,rgb(233, 244, 254),rgba(233, 244, 254, .99) 25%, rgba(255, 255, 255, 0))'
            },
            backgroundColor: {
                'purple-black': 'rgb(58, 53, 111)',
                'purple-dark': 'rgb(86, 76, 137)',
                'purple-mid': 'rgb(154, 101, 253)',
                'purple-lite': 'rgb(170, 153, 255)'
            },
            color: {
                'purple-black': 'rgb(58, 53, 111)',
                'purple-dark': 'rgb(86, 76, 137)',
                'purple-mid': 'rgb(154, 101, 253)',
                'purple-lite': 'rgb(170, 153, 255)'
            },
        },
    },
    plugins: [
        // require('@tailwindcss/typography'),
    ],
}