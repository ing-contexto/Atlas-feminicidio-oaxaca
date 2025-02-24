import { useState } from "react";

interface NavBarProps {
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ imageSrcPath, navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#">
            <img
              src={imageSrcPath}
              width="400" // Ajusta el tamaño del logo
              height="auto"
              className="block"
              alt="Logo"
            />
          </a>

          {/* Botón de menú para móviles */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Menú de navegación */}
          <ul
            className={`lg:flex space-x-6 absolute lg:static bg-white w-full lg:w-auto left-0 top-16 lg:top-auto shadow-lg lg:shadow-none p-4 lg:p-0 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 block ${
                    selectedIndex === index ? "font-bold text-blue-700" : ""
                  }`}
                  href="#"
                  onClick={() => {
                    setSelectedIndex(index);
                    setIsMenuOpen(false); // Cierra el menú en móviles al hacer clic
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
