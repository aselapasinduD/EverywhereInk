/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "var(--primary-foreground)",
        menu: {
          background: "var(--background-menu)",
          foreground: "var(--foreground-menu)",
          hoverbutton: "var( --muted-tertiary)",
          list: {
            background: "var(--menu-list-background)",
            arrow: "var(--muted-primary)"
          },
          setting: {
            icon: "var(--muted-primary)"
          }
        },
        notebook: {
          background: "var(--background-notebook)",
        },
        preview: {
          background: "var(--background-preview)",
        },
        line: "var(--primary-line)",
      }
    },
  },
  plugins: [],
}

