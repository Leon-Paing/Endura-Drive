/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.css',
    './index.html',
    './src/App.jsx',
    './src/Home.jsx',
    './src/Home.jsx',
    './src/components/Navbar.jsx',
    './src/components/Hero.jsx',
    './src/components/Banner.jsx',
    './src/components/AvailableCarSection.jsx',
    './src/components/ContactInfo.jsx',
    './src/components/Footer.jsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        "custom": ["Impact, fantasy"]
      },
      borderWidth:{
        "0.5":"0.5px"
      },
      screens:{
        "xs": "300px"
      },
      fontSize:{
        "xxs": "0.5rem",
        "xxxs": "0.4rem"
      },
      boxShadow:{
        "in": "inset 20px 20px 100px black",
      },
      width:{
        "2/7":"23%",
      },
    },
  },
  plugins: [],
}

