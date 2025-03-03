import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ imageSrcPath, navItems }: NavBarProps) {
  const location = useLocation(); // Obtiene la ruta actual
  const links = ["/", "/acerca", "/estadistica", "/mapa"]; // Rutas correspondientes

  return (
    <nav className="w-full shadow-md" style={{ backgroundColor: "#213B7C" }}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={imageSrcPath}
            width="160"
            height="60"
            className="block"
            alt="Logo"
          />
        </Link>

        {/* Título */}
        <h1 className="text-3xl font-bold text-white">Atlas feminicida de Oaxaca</h1>

        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          {navItems.map((item, index) => {
            const isActive = location.pathname === links[index]; // Verifica si la ruta actual coincide

            return (
              <li key={item}>
                <Link
                  to={links[index] || "/"} // Evita posibles errores de índice
                  className={`px-3 py-2 block transition duration-300 ${
                    isActive
                      ? "font-bold text-white border-b-2 border-white"
                      : "text-white hover:text-white hover:border-b-2 hover:border-white"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
