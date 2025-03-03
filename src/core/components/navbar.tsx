import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
  imageSrcPath: string;
}

function NavBar({ imageSrcPath }: NavBarProps) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const location = useLocation(); // Para obtener la URL actual

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = () => {
    setTimeout(() => setOpenDropdown(false), 200); // Retraso para permitir el clic
  };

  return (
    <nav className="w-full shadow-md" style={{ backgroundColor: "#213B7C" }}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setOpenDropdown(false)}>
          <img src={imageSrcPath} width="160" height="60" className="block" alt="Logo" />
        </Link>

        {/* Título */}
        <h1 className="text-3xl font-bold text-white">Atlas Feminicida de Oaxaca</h1>

        {/* Navbar */}
        <ul className="flex space-x-6">
          {/* Inicio */}
          <li>
            <Link
              to="/"
              className={`px-3 py-2 block ${
                location.pathname === "/" ? "text-white font-bold border-b-2 border-white" : "text-white hover:text-white"
              }`}
              onClick={() => setOpenDropdown(false)}
            >
              Inicio
            </Link>
          </li>

          {/* Atlas con Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`px-3 py-2 block focus:outline-none ${
                location.pathname.startsWith("/mapa") ||
                location.pathname.startsWith("/acerca")
                  ? "text-white font-bold border-b-2 border-white"
                  : "text-white hover:text-white"
              }`}
            >
              Atlas ▾
            </button>

            {openDropdown && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                onMouseLeave={closeDropdown}
              >
                <li>
                  <Link
                    to="/mapa"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Mapa
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/acerca"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Acerca de
                  </Link>
                </li>

                <li>
                  <Link
                    to="/marco_juridico"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Marco jurídico
                  </Link>
                </li>

                <li>
                  <Link
                    to="/reloj_criminologico"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setOpenDropdown(false)}
                  >
                    Reloj criminológico
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;