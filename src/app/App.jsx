import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Format from "../components/Format";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Material from "../components/Material"
import SwitchCardContainer from "../components/SwitchCardContainer";
import { getSwitches } from "../utils/utils";
import Product from "../components/Product";
import Engraving from "../components/Engraving";
import StyleBoard from "../components/StyleBoard";
import ArtworkPreview from "../components/ArtworkPreview";

function App() {
  const [type, setType] = useState('AXES');
  const [color, setColor] = useState("#fc2345")
  const [board, setBoard] = useState( [ getSwitches() ])
  const [frameSide, setFrameSide] = useState(["Side"])

  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<SwitchCardContainer handleClick={setType} type={type}/>}/>
          <Route exact path="/material" element={<Material color={color} switchCollection={board} handleChange={setColor} />} />
          <Route exact path="/format" element={<Format switchCollection={board} color={color} handleBoard={setBoard} handleFrameSide={setFrameSide}/>}/>
          <Route exact path="/product" element={<Product switchCollection={board} frameSide={frameSide} color={color} setBoard={setBoard}/>} />
          <Route exact path="/engraving" element={<Engraving switchCollection={board} frameSide={frameSide} color={color} setBoard={setBoard}/>} />
          <Route exact path="/style" element={<StyleBoard switchCollection={board} frameSide={frameSide} color={color} setBoard={setBoard}/>} />
          <Route exact path="/preview" element={<ArtworkPreview switchCollection={board} frameSide={frameSide} color={color} setBoard={setBoard}/>} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
