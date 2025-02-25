import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ imageSrcPath, navItems }: NavBarProps) {
  const location = useLocation(); // Obtiene la ruta actual
  const links = ["/", "/acerca", "/estadistica", "/mapa"]; // Rutas correspondientes

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={imageSrcPath}
            width="415"
            height="auto"
            className="block"
            alt="Logo"
          />
        </Link>

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
                      ? "font-bold text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-700 hover:text-blue-600"
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
