/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fef3fa",
        selected: "#0D111C",
        noSelected: "#5D6785",
        searchBar: "#EEF6FD",
        searchStroke: "#D6DDE3",
        slashSquare: "#E9F0FE",
        backSwap: "#D2D9EE",
        barSwap: "#F5F6FC",
        selectToken: "#FB118E",
        textSelectToken: "#BBBFCF",
        backETH: "#E8ECFB",
        arrowDownSwap: "#98A1C0",
        ArbitrumBar: "#D9E8FA",
        ArbitrumLetter: "#30A1EB",
        greenBall: "#40B66B",
        greenNumber: "#ABDFBE",
      },
      animation: {
        opacity: "opacity 0.3s ease-in-out",
        opacityDetail: "opacityDetail 0.3s ease-in-out",
        opacityV2: "opacityV2 .7s ease-in-out",
        scaleDown: "scaleDown 1s ease-in-out",
        slideIn: "slide-in 0.3s ease-in",
        slideInToLeft: "slide-in-to-left .4s ease-in",
        slideInToRight: "slide-in-to-right 1.2s ease-in",
        slideOut: "slide-out 0.3s ease-in",
        slideUp: "slide-up 0.7s ease-in-out",
        slideDown: "slide-down 0.7s ease-in-out",
        cancel: "cancel 0.3s ease-in-out",
        homeSwiperOverlay: "homeSwiperOverlay .7s ease-in-out",
      },
      keyframes: {
        homeSwiperOverlay: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.7 },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        opacityDetail: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.3 },
        },
        opacityV2: {
          "0%": { transform: "scale(0.7)" },
          "60%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-to-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "70%": {
            transform: "translateX(-10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "slide-up": {
          "0%": { bottom: "-100%", opacity: 0 },
          "100%": { bottom: "0", opacity: 1 },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        cancel: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.blue.600")} ${theme(
            "colors.blue.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar2": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.blue.600")} ${theme(
            "colors.blue.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "0px",
          width: "0px",
        },
        ".scrollbar2::-webkit-scrollbar": {
          height: "4px",
          width: "4px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.blue.600"),
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.white"),
        },
        ".scrollbar2::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.black"),
        },
        ".scrollbar2::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.slate.300"),
          radius: "12px",
        },
      });
    }),
  ],
};
