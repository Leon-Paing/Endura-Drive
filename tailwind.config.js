/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.css',
    './index.html',
    './src/App.jsx',
    './src/PagesHome.jsx',
    './src/Pages/Contact.jsx',
    './src/Pages/Stocks.jsx',
    '/src/Pages/AboutUs.jsx',
    '/src/Pages/Sell.jsx',
    './src/Pages/Garage.jsx',
    './src/Pages/Details.jsx',
    './src/components/Navbar.jsx',
    './src/components/Hero.jsx',
    './src/components/Banner.jsx',
    './src/components/AvailableCarSection.jsx',
    './src/components/ContactInfo.jsx',
    './src/components/Footer.jsx',
    './src/components/FilterItems.jsx',
    './src/components/BrandFilter.jsx',
    './src/components/ModelFilter.jsx',
    './src/components/YearFilter.jsx',
    './src/components/BodyFilter.jsx',
    './src/components/AboutBanner1.jsx',
    './src/components/AboutBanner2.jsx',
    './src/components/AboutBanner3.jsx',
    './src/components/aboutHomeLink.jsx',
    './src/components/SellForm.jsx',
    './src/components/ServiceTitle.jsx',
    './src/components/ServiceSection1.jsx',
    './src/components/ServiceSection2.jsx',
    './src/components/ServiceSection3.jsx',
    './src/components/FilteredList.jsx',
    './src/components/NavGarage.jsx',
    './src/components/GarageTilte.jsx',
    '/src/components/GarageItems.jsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        "custom": ["Impact, fantasy"],
        "lato": ['Lato', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        typewriter: ['"American Typewriter"', 'serif'],
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
      height:{
        "98": "450px",
        "100": "500px",
        "110": "700px",
      },
    },
  },
  plugins: [],
}

