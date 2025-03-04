import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { alertaColor, carrEstatalcolor, carrFederalcolor, cañadaColor, costaColor, incidenciasColor, istmoColor, mixtecaColor, papaloapanColor, pobreza100Color, pobreza25Color, pobreza50Color, pobreza75Color, sierraNorteColor, sierraSurColor, vallesCentralesColor } from "../styles/colors";

const LEGEND_POSITION = "bottomright";

const legendStateItems = [
    { color: mixtecaColor, label: "Mixteca" },
    { color: sierraNorteColor, label: "Sierra Norte" },
    { color: sierraSurColor, label: "Sierra Sur" },
    { color: costaColor, label: "Costa" },
    { color: istmoColor, label: "Istmo" },
    { color: cañadaColor, label: "Cañada" },
    { color: vallesCentralesColor, label: "Valles Centrales" },
    { color: papaloapanColor, label: "Papaloapan" }
]

const legendPovertyItems = [
    { color: incidenciasColor, label: "Municipios con incidencias registradas" },
]

const legendAlertItems = [
    { color: alertaColor, label: "Municipios con Alerta de género" },
]

const legendPovertyExtItems = [
    { color: pobreza100Color, label: "Municipios con población en pobreza extrema mayor al 50%" },
]

function LegendPanel(props: { activeLayer: string }) {
    const legendItems =
        props.activeLayer === "regions" ? legendStateItems :
            props.activeLayer === "incidencias" ? legendPovertyItems :
                props.activeLayer === "poverty_ext" ? legendPovertyExtItems :
                    legendAlertItems;
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
                    <span className={`w-3 h-3 inline-block rounded-sm`} style={{ backgroundColor: item.color }} />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

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
