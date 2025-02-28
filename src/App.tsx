import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "leaflet/dist/leaflet.css";
import NavBar from './core/components/navbar';
import imagePath from './assets/banner_uac_2025.png?url';

// Importar las páginas
import Inicio from "./modules/map/sceens/inicio";
import Acerca from "./modules/map/sceens/acerca";
import Mapa from "./modules/map/sceens/mapa";

function App() {
  const items = [
    { label: "Inicio", path: "/" },
    { label: "Acerca del Atlas", path: "/acerca" },
    { label: "Mapa", path: "/mapa" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Router>
      <NavBar imageSrcPath={imagePath} navItems={items} />

      <div className="w-full p-6 flex-grow">
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </div>

      <footer className="w-full" style={{ backgroundColor: '#213B7C', color: 'white', padding: '1rem', textAlign: 'left' }}>
        <div className="container mx-auto px-4">
        <p>&copy; 2025 Atlas feminicida de Oaxaca. Todos los derechos reservados.</p>
        </div>
      </footer>
      </Router>
    </div>
  );
}

export default App;
