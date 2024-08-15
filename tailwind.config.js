/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                DM: ["DM Sans Text"]
            },
            dropShadow: {
                'xl': '0 4px 4px rgba(0, 0, 0, 0.25)'
            }
        },
    },
    plugins: [],
}

