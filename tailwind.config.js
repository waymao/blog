module.exports = {
  purge: {
    enabled: true,
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ]
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['"Playfair Display"', '"Noto Serif SC"', 'ui-serif', 'Georgia'],
        'mono': ['"Source Code Pro"', 'ui-monospace', 'SFMono-Regular']
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '6.5xl': '3.5rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
