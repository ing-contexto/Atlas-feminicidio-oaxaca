import { useState } from "react";
import Map from "../components/map";
import Victim from "../model/victim";
import victimsData from "../utils/victimas.json";

const victims: Victim[] = victimsData.map(victim => ({
  ...victim,
  fechaMuerte: new Date(victim.fechaMuerte)
}));

const generateMonths = (initialYear: number, finalYear: number, finalMonth: number) => {
  const months = [];
  for (let year = initialYear; year <= finalYear; year++) {
    const maxMonth = year === 2024 ? 12 : finalMonth;
    for (let month = 1; month <= maxMonth; month++) {
      months.push(`${year}-${month.toString().padStart(2, '0')}`);
    }
  }
  return months;
};

const months = generateMonths(2024, 2025, 1);
console.log(months);


const formatMonth = (monthString: string) => {
  const [year, month] = monthString.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  const formattedMonth = date.toLocaleDateString("es-ES", { year: "numeric", month: "long" });
  return formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
};

const layers = [
  { value: "regions", label: "Regiones del estado" },
  { value: "incidencias", label: "Municipios con incidencias registradas" },
  { value: "alert", label: "Municipios con alerta de género" },

  { value: "poverty_ext", label: "Municipios con pobreza extrema" }
];

export default function Mapa() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const [showFilter, setShowFilter] = useState(true);
  const [showAllVictims, setShowAllVictims] = useState(true);
  const [showUnderN, setShowUnderN] = useState(false);
  const [activeLayer, setActiveLayer] = useState(layers[0].value);

  const selectedMonth = months[selectedMonthIndex];
  let filteredVictims = showAllVictims
    ? victims
    : victims.filter(victim => {
      const victimMonth = victim.fechaMuerte.getFullYear() + "-" + (victim.fechaMuerte.getMonth() + 1).toString().padStart(2, '0');
      return victimMonth === selectedMonth;
    });

  if (showUnderN) {
    filteredVictims = filteredVictims.filter(victim => victim.edad < 18);
  }

  return (
    <div className="p-4 mt-8">
      <div className="relative">
        <div className={`absolute md:hidden top-9 left-1 p-4 shadow-lg rounded-lg z-10 ${showFilter ? "bg-gray-200 text-gray-800" : "bg-blue-600 text-white"}`} onClick={() => {
          setShowFilter(!showFilter);
        }}>{showFilter ? "Ocultar filtros" : "Mostrar filtros"}</div>
        <div className={`${showFilter ? "" : "hidden"} md:block absolute top-9 right-4 bg-white p-4 shadow-lg rounded-lg z-10 w-64`}>
          <h3 className="text-lg font-semibold mb-2">Filtros</h3>

          <label className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={showAllVictims}
              onChange={(e) => setShowAllVictims(e.target.checked)}
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-sm font-medium">Mostrar todas las ubicaciones</span>
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Selecciona un mes:
          </label>
          <input
            type="range"
            min="0"
            max={months.length - 1}
            value={selectedMonthIndex}
            onChange={(e) => setSelectedMonthIndex(Number(e.target.value))}
            className="w-full accent-blue-600 mt-1"
            disabled={showAllVictims}
          />

          <div className="mt-4 flex flex-col gap-2">
            {layers.map(layer => (
              <label key={layer.value} className="cursor-pointer w-full">
                <input
                  type="radio"
                  name="layer"
                  value={layer.value}
                  checked={activeLayer === layer.value}
                  onChange={() => setActiveLayer(layer.value)}
                  className="hidden"
                />
                <span className={`block w-full text-center px-4 py-2 rounded ${activeLayer === layer.value ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                  {layer.label}
                </span>
              </label>
            ))}
          </div>

          <label className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              checked={showUnderN}
              onChange={(e) => setShowUnderN(e.target.checked)}
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-sm font-medium">Mostrar solo víctimas menores de 18 años</span>
          </label>
        </div>

        <p className="text-center mt-2 text-lg font-semibold">
          {showAllVictims ? "Mostrando todas las ubicaciones" : formatMonth(months[selectedMonthIndex])}
        </p>
        <Map victims={filteredVictims} activeLayer={activeLayer} />
      </div>
    </div>
  );
}