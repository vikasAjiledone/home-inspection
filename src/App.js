import React from "react";
import Booking from "./component/Booking";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Request from "./component/Request";
import Socials from "./component/Socials";
import TechnologyInfo from "./component/TechnologyInfo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Booking/>
      <TechnologyInfo/>
      <Request/>
      <Footer/>
      <Socials/>
    </div>
  );
}

export default App;
