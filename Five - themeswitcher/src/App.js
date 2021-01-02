import React, {useState} from 'react';
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from './Components/HeroSection';
  

const App = () => {
const themeHook = useState("light")
return(
  <ThemeContext.Provider value={themeHook}>
    <div>
      <Header />
        <HeroSection />
    </div>
  </ThemeContext.Provider>
)
}

export default App;
