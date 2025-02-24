import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import hallazgo from "../utils/hallazgo.json"

export default function Main() {
    return (
        <MapContainer center={[17.064238826943054, -96.72367769482949]} zoom={5} className="w-full h-screen">
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />

            <MarkerClusterGroup>
                {hallazgo.map((marker, index) => (
                    <Marker key={index} position={[marker.Y, marker.X]} >
                        <Popup>
                            <div>
                                <h2 className="text-center font-bold uppercase">{`Víctima ${index + 1}`}</h2>
                                <p><span className="font-bold">Región a la que pertenece: </span>{marker.Región}</p>
                                <p><span className="font-bold">Tipo de lugar de Hallazgo: </span>{marker.Zona}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}