import React from "react";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
};
export default App;
