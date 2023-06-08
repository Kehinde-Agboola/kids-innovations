/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "yellow-30": "#FCB913",
      "light-blue-20": "#1C88C8",
      "white": "#FFFFFF",
      "sky-blue": "#A0DCFF",
      "light-gray": "#E7E8EA",
    },
    backgroundImage: (theme) =>({
      "hero-image": "url('./assets/hero_img.svg')",
      
    }),

    logos: {
    logo: "url('./assets/logo.svg')",
    google: "url('./assets/googlelogo.svg')" ,
    microsoft: "url('./assets/microsoftlogo.svg')" ,
    migo: "url('./assets/migologo.svg')" ,
    nomba: "url('./assets/nombalogo.svg')" ,
    wave: "url('./assets/flutterwavelogo.svg')" ,
    master: "url('./assets/mastercardlogo.svg')" ,
    clooper: "url('./assets/clooperlogo.svg')" ,
    tdt: "url('./assets/tdtlogo.svg')" ,
      
    },
    content:{
    class: "url('./assets/class.svg')",
    puzzle: "url('./assets/puzzle.svg')",
    connect: "url('./assets/connect.svg')",
    explore: "url('./assets/explore.svg')",
    ux: "url('./assets/uiux.svg)",
    fullstack: "url('./assets/fullstack.svg)",
    photo: "url('./assets/photography.svg)",
    javascript: "url('./assets/javascript.svg)",
    flutter: "url('./assets/flutter.svg)",
    motion: "url('./assets/motion.svg)",
    laptop: "url('./assets/laptop.svg)",
    var: "url('./assets/tosin.svg)",
    // var-img: "url('./assets/tosin.svg)",
    mentor: "url('./assets/mentor.svg')",
    tribe: "url('./assets/tribe.svg')",
    sponsor: "url('./assets/sponsor.svg')",
      
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}

