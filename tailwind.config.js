module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html','src/Components/Modal.js'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      animation: {
        ping: 'ping 1s cubic-bezier(0.0, 0.3, 0.5, 1) infinite',
      },
      keyframes: {
        ping: {
          '0%, 100%': {
            transform: 'scale(5)' },
          opacity: 0.1,
        }
      }
      }
    }
  }
