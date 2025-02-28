import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Victim from "../model/victim";
import { LatLngTuple } from "leaflet";
import useGeoJsonData from "../hooks/useGeoJsonData";
import { carrEstatalStyle, carrFederalStyle, estadoStyle, styleAlerta, stylePobreza, styleRegional } from "../styles/geoJsonStyles";
import Ficha from "./ficha";
import Legend from "./legend";

const defaultIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function Map(props: { victims: Victim[], activeLayer: string }) {
    const { geoJsonData, loader } = useGeoJsonData()

    const bounds: [LatLngTuple, LatLngTuple] = [
        [18.419107308645803, -98.43295461507425],
        [15.865712048666351, -93.81846189492535]
    ];

    return loader ? <div>Cargando...</div> : <MapContainer
        center={[17.064238826943054, -96.72367769482949]}
        zoom={8}
        className="w-11/12 h-[70vh] sm:w-5/6 z-0"
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        minZoom={8}
    >
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {geoJsonData.carr_estatal && <GeoJSON data={geoJsonData.carr_estatal}
            style={carrEstatalStyle} />
        }
        {geoJsonData.carr_federal && <GeoJSON data={geoJsonData.carr_federal}
            style={carrFederalStyle} />
        }

        {geoJsonData.estado && <GeoJSON data={geoJsonData.estado}
            style={estadoStyle} />
        }

        {geoJsonData.municipal && props.activeLayer == "alert" && <GeoJSON data={geoJsonData.municipal}
            style={styleAlerta} />
        }

        {geoJsonData.regional && props.activeLayer == "regions" && <GeoJSON data={geoJsonData.regional}
            style={styleRegional} />
        }
        {geoJsonData.pobreza && props.activeLayer == "poverty" && <GeoJSON data={geoJsonData.pobreza}
            style={stylePobreza} />
        }

        <MarkerClusterGroup key={props.victims.length} >
            {props.victims.map((victima) => (
                <Marker key={victima.id} position={[victima.latitud, victima.longitud]} icon={defaultIcon} >
                    <Popup>
                        <Ficha victima={victima} />
                    </Popup>
                </Marker>
            ))}
        </MarkerClusterGroup>
        <Legend activeLayer={props.activeLayer} />
    </MapContainer>


}
