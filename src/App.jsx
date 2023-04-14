import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ArtistComponent from "./components/ArtistComponent";
import AlbumComponent from "./components/AlbumComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/album/:id" element={<AlbumComponent />} />
          <Route path="/artist/:id" element={<ArtistComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
