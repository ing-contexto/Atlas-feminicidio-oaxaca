import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "leaflet/dist/leaflet.css";
import NavBar from './core/components/navbar';
import imagePath from './assets/banner_uac_2025.png?url';

// Importar las páginas
import Inicio from "./modules/map/screens/inicio";
import Acerca from "./modules/map/screens/acerca";
import Estadistica from "./modules/map/screens/estadistica";
import Mapa from "./modules/map/screens/mapa";

function App() {
  const items = ["Inicio", "Acerca del Atlas", "Estadística", "Mapa"];

  return (
    <Router>
      <NavBar imageSrcPath={imagePath} navItems={items} />

      <div className="bg-blue-900 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Atlas feminicida de Oaxaca</h1>
      </div>

      <div className="w-full p-6">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/estadistica" element={<Estadistica />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
