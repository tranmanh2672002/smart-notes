import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "overlay-logo": "url('/assets/img/overlay-logo.svg')",
      },
      backgroundColor: {
        primary: "var(--primary-color)",
        secondary: "#EFECE6",
      },
      textColor: {
        "gradient-primary": "transparent",
        "primary-1": "var(--text-primary-1)",
        "primary-2": "var(--text-primary-2)",
        "secondary-1": "var(--text-secondary-1)",
        "secondary-2": "var(--text-secondary-2)",
      },
      borderColor: {
        primary: "#048C80",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".text-gradient-primary": {
          backgroundImage:
            "linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%)",
          backgroundClip: "text",
          textFillColor: "transparent",
        },
      });
    },
  ],
};
export default config;
