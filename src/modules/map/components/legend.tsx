import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { alertaColor, carrEstatalcolor, carrFederalcolor, cañadaColor, costaColor, incidenciasColor, istmoColor, mixtecaColor, papaloapanColor, pobreza100Color, polColor, sierraNorteColor, sierraSurColor, vallesCentralesColor } from "../styles/colors";

const LEGEND_POSITION = "bottomright";

function addOpacity(hex: string, alpha: string) {
    return hex + alpha;
}

const legendStateItems = [
    { color: addOpacity(mixtecaColor, "33"), label: "Mixteca" },
    { color: addOpacity(sierraNorteColor, "33"), label: "Sierra Norte" },
    { color: addOpacity(sierraSurColor, "33"), label: "Sierra Sur" },
    { color: addOpacity(costaColor, "33"), label: "Costa" },
    { color: addOpacity(istmoColor, "33"), label: "Istmo" },
    { color: addOpacity(cañadaColor, "33"), label: "Cañada" },
    { color: addOpacity(vallesCentralesColor, "33"), label: "Valles Centrales" },
    { color: addOpacity(papaloapanColor, "33"), label: "Papaloapan" }
];

const legendPovertyItems = [
    { color: incidenciasColor, label: "Municipios con incidencias registradas" },
]

const legendAlertItems = [
    { color: addOpacity(alertaColor, "59"), label: "Municipios con Alerta de género" } // 35% de opacidad
];

const legendPovertyExtItems = [
    { color: addOpacity(pobreza100Color, "59"), label: "Municipios con pobreza extrema (>50%)" }
];

const legendPolItems = [
    { color: addOpacity(polColor, "59"), label: "Municipios con incidencias de VPMRG" }
];

function LegendPanel(props: { activeLayer: string }) {
    const legendItems =
        props.activeLayer === "regions" ? legendStateItems :
            props.activeLayer === "incidencias" ? legendPovertyItems :
                props.activeLayer === "poverty_ext" ? legendPovertyExtItems :
                    props.activeLayer === "pol" ? legendPolItems :
                        legendAlertItems;;

    return (
        <div className="bg-white p-3 rounded-lg shadow-lg text-sm">
            <strong className="block mb-1">Simbología</strong>

            <div className="flex items-center space-x-2">
                <span className="inline-block" style={{ backgroundColor: carrEstatalcolor, width: "20px", height: "2px" }} />
                <span>Carreteras estatales</span>
            </div>
            <div className="flex items-center space-x-2 pb-1">
                <span className="inline-block" style={{ backgroundColor: carrFederalcolor, width: "20px", height: "2px" }} />
                <span>Carreteras federales</span>
            </div>

            {legendItems.map((item) => (
                <div key={item.label} className="flex items-center space-x-2">
                    <span className="w-3 h-3 inline-block rounded-sm" style={{ backgroundColor: item.color }} />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

// Componente principal de la leyenda en el mapa
export default function Legend(props: { activeLayer: string }) {
    const map = useMap();
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        const div = L.DomUtil.create("div", "info legend") as HTMLDivElement;
        setContainer(div);

        const legend = new L.Control({ position: LEGEND_POSITION });
        legend.onAdd = () => div;
        legend.addTo(map);

        return () => {
            legend.remove();
        };
    }, [map]);

    return container ? createPortal(<LegendPanel activeLayer={props.activeLayer} />, container) : null;
}
