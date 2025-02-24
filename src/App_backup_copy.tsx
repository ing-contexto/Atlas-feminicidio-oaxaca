import './App.css';
import "leaflet/dist/leaflet.css";
import Main from './modules/map/sceens/main';
import NavBar from './core/components/navbar';
import imagePath from './assets/banner_uac_2025.png?url';

function App() {
  const items = ["Inicio", "Acerca del Atlas", "Estadística","Mapa"];

  return (
    <div>
      <NavBar imageSrcPath={imagePath} navItems={items} />
      <div className="bg-blue-900 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Atlas feminicida de Oaxaca</h1>
      </div>
      <div className='w-full'>
        <Main />
      </div>
    </div>
  )
}

export default App;
