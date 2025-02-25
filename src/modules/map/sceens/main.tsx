import { useState } from "react";
import Map from "../components/map";
import Victim from "../model/victim";
import victimsData from "../utils/victimas.json";

const victims: Victim[] = victimsData.map(victim => ({
    ...victim,
    fechaMuerte: new Date(victim.fechaMuerte)
}));

const generateMonths = () => {
    const months = [];
    for (let year = 2020; year <= 2023; year++) {
        for (let month = 1; month <= 12; month++) {
            months.push(`${year}-${month.toString().padStart(2, '0')}`);
        }
    }
    return months;
};

const months = generateMonths();

const formatMonth = (monthString: string) => {
    const [year, month] = monthString.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    const formattedMonth = date.toLocaleDateString("es-ES", { year: "numeric", month: "long" });
    return formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
};

export default function Main() {
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
    const [showAllVictims, setShowAllVictims] = useState(true);
    const [activeLayer, setActiveLayer] = useState("alert");

    const selectedMonth = months[selectedMonthIndex];
    const filteredVictims = showAllVictims
        ? victims
        : victims.filter(victim => {
            const victimMonth = victim.fechaMuerte.getFullYear() + "-" + (victim.fechaMuerte.getMonth() + 1).toString().padStart(2, '0');
            return victimMonth === selectedMonth;
        });

    return (
        <div className="p-4">
            <div className="mb-4">
                <label className="flex items-center space-x-2 mb-2">
                    <input
                        type="checkbox"
                        checked={showAllVictims}
                        onChange={(e) => setShowAllVictims(e.target.checked)}
                        className="w-5 h-5 accent-blue-600"
                    />
                    <span className="text-lg font-medium">Mostrar todas las ubicaciones</span>
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
            </div>

            <p className="text-center mt-2 text-lg font-semibold">
                {showAllVictims ? "Mostrando todos los lugares" : formatMonth(months[selectedMonthIndex])}
            </p>

            <div className="flex justify-center my-4 space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="layer"
                        value="regions"
                        checked={activeLayer === "regions"}
                        onChange={() => setActiveLayer("regions")}
                        className="hidden"
                    />
                    <span className={`px-4 py-2 rounded-lg ${activeLayer === "regions" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>Regiones del estado</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="layer"
                        value="alert"
                        checked={activeLayer === "alert"}
                        onChange={() => setActiveLayer("alert")}
                        className="hidden"
                    />
                    <span className={`px-4 py-2 rounded-lg ${activeLayer === "alert" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>Municipios con alerta de género</span>
                </label>
            </div>

            <div className="flex justify-center">
                <Map victims={filteredVictims} regions={activeLayer === "regions"} alert={activeLayer === "alert"} />
            </div>
        </div>
    );
}
