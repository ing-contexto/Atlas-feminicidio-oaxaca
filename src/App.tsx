import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "leaflet/dist/leaflet.css";
import NavBar from './core/components/navbar';
import imagePath from './assets/logo fgeo atlasno circles.svg?url';

// Importar pages
import Inicio from "./modules/map/sceens/inicio";
import Metodologia from "./modules/map/sceens/metodologia";
import Mapa from "./modules/map/sceens/mapa";
import MarcoJuridico from "./modules/map/sceens/marcoJuridico";
import RelojCriminologico from "./modules/map/sceens/relojCriminologico";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <NavBar imageSrcPath={imagePath} />

        <div className="w-full md:p-6 p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/marco_juridico" element={<MarcoJuridico />} />
            <Route path="/reloj_criminologico" element={<RelojCriminologico />} />
          </Routes>
        </div>

        <footer className="w-full bg-[#213B7C] text-white py-4 text-center">
          <div className="container mx-auto px-4 max-w-full">
            <p>&copy; 2025 Atlas Feminicida de Oaxaca. Todos los derechos reservados.</p>
          </div>
        </footer>

      </Router>
    </div>
  );
}

export default App;
