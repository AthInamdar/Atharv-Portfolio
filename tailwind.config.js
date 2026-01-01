/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#121212",
                primary: "#00f2ff", // Neon Cyan
                secondary: "#7000ff", // Neon Purple
                accent: "#ff0099", // Neon Pink
                text: "#e0e0e0",
                "text-muted": "#a0a0a0",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                neon: "0 0 10px rgba(0, 242, 255, 0.5), 0 0 20px rgba(0, 242, 255, 0.3)",
                "neon-secondary": "0 0 10px rgba(112, 0, 255, 0.5), 0 0 20px rgba(112, 0, 255, 0.3)",
            },
        },
    },
    plugins: [],
}
