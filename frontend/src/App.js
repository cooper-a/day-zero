import React from "react";
import "./App.css";
import Image from "react-bootstrap/Image";
import MyCarousel from "./components/MyCarousel";
import header from "./header.jpg";
import bg from "./bg.png";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Image src={header} alt="Logo" fluid />;
      </div>
      <p className="lead">
        Day Zero + 1, our interactive and predictive data visualization tool
        uses satellite data and information to and identify populations
        vulnerable to Day Zero and predict the point at which our actions are
        irreversible. Though we possess databases detailing changes in world
        surface water, groundwater, population density, water usage and more,
        the populace remains unaware of the ramifications of Day Zero, and thus
        incapable of preventing it due to the complexity of communicating raw
        analytical data to ordinary people.
      </p>
      <MyCarousel style={{ width: "20vw" }} />
    </div>
  );
}

export default App;
