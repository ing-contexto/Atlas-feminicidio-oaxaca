import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import hallazgo from "./modules/map/utils/hallazgo.json"

const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

export default function MapTest() {
    return (
        <MapContainer center={[17.064238826943054, -96.72367769482949]} zoom={5} className="w-full h-screen">
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />

            <MarkerClusterGroup>
                {hallazgo.map((marker, index) => (
                    <Marker key={index} position={[marker.Y, marker.X]} icon={customIcon}>
                        <Popup>
                            <div>
                                <h2>{`Víctima ${index + 1}`}</h2>
                                <p>{`Región a la que pertenece: ${marker.Región}`}</p>
                                <p>{`Tipo de lugar de Hallazgo: ${marker.Zona}`}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

