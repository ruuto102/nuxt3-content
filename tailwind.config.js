export default {
  darkMode: 'class', // ← これを追加
  theme: {
    extend: {
      fontFamily: {
        kawaii: ['"Sawarabi Gothic"', 'sans-serif'],
        cherry: ['"Cherry Bomb One"', 'cursive'],
        gloria: ['"Gloria Hallelujah"', 'cursive'],
      },
      keyframes: {
        seesaw: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(8deg)' },
          '60%': { transform: 'rotate(-6deg)' },
          '80%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        seesaw: 'seesaw 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
}
