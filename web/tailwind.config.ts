import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // Void Black
                foreground: "#f8fafc", // slate-50
                slate: {
                    850: "#1e293b",
                    900: "#0f172a",
                    950: "#020617",
                },
                primary: {
                    DEFAULT: "#3b82f6", // Muted Electric Blue
                    foreground: "#0a0a0a",
                    glow: "rgba(59, 130, 246, 0.5)",
                },
                secondary: {
                    DEFAULT: "#10b981", // Cyber Green (muted)
                    foreground: "#0a0a0a",
                },
                accent: {
                    DEFAULT: "#38bdf8", // Sky Blue
                    foreground: "#0a0a0a",
                },
                muted: {
                    DEFAULT: "#1e293b", // slate-800
                    foreground: "#94a3b8", // slate-400
                },
                card: {
                    DEFAULT: "rgba(10, 10, 10, 0.6)", // Glassmorphism base
                    foreground: "#f8fafc",
                    border: "rgba(148, 163, 184, 0.1)",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "cyber-grid": "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "glitch": "glitch 1s linear infinite",
                "typewriter": "typewriter 2s steps(20) forwards",
                "pulse-network": "pulse-network 2s infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glitch: {
                    "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
                    "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
                    "62%": { transform: "translate(0,0) skew(5deg)" },
                },
                typewriter: {
                    to: {
                        left: "100%",
                    },
                },
                "pulse-network": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
