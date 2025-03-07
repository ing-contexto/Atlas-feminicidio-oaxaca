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
import { carrEstatalStyle, carrFederalStyle, estadoStyle, styleAlerta, stylePobreza, stylePobrezaExt, stylePolitica, styleRegional } from "../styles/geoJsonStyles";
import Ficha from "./ficha";
import Legend from "./legend";
import yellowIcon from "../../../assets/marker-icon-yellow.png"
import cyanIcon from "../../../assets/marker-icon-cyan.png"

const defaultIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const yellowMarkerIcon = new L.Icon({
    iconUrl: yellowIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const cyanMarkerIcon = new L.Icon({
    iconUrl: cyanIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function Map(props: { victims: Victim[], activeLayer: string }) {
    const { geoJsonData, loader } = useGeoJsonData()

    const bounds: [LatLngTuple, LatLngTuple] = [
        [18.75136012536534, -98.43888370788096],
        [15.427167595786338, -93.51326096479475]
    ];

    return loader ? <div>Cargando...</div> : <MapContainer
        center={[17.064238826943054, -96.72367769482949]}
        zoom={8}
        className="w-11/12 h-[70vh] sm:w-5/6 z-0"
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        minZoom={8}
        maxZoom={13}
    >
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {geoJsonData.estado && props.activeLayer == "alert" && <GeoJSON data={geoJsonData.municipios}
            style={styleAlerta} />
        }

        {geoJsonData.estado && props.activeLayer == "regions" && <GeoJSON data={geoJsonData.municipios}
            style={styleRegional} />
        }
        {geoJsonData.estado && props.activeLayer == "incidencias" && <GeoJSON data={geoJsonData.municipios}
            style={stylePobreza} />
        }
        {geoJsonData.estado && props.activeLayer == "poverty_ext" && <GeoJSON data={geoJsonData.municipios}
            style={stylePobrezaExt} />
        }
        {geoJsonData.estado && props.activeLayer == "pol" && <GeoJSON data={geoJsonData.municipios}
            style={stylePolitica} />
        }
        {geoJsonData.carr_estatal && <GeoJSON data={geoJsonData.carr_estatal}
            style={carrEstatalStyle} />
        }
        {geoJsonData.carr_federal && <GeoJSON data={geoJsonData.carr_federal}
            style={carrFederalStyle} />
        }
        {geoJsonData.estado && <GeoJSON data={geoJsonData.estado}
            style={estadoStyle} />
        }

        <MarkerClusterGroup key={props.victims.length} >
            {props.victims.map((victima) => {
                let icon = defaultIcon;
                if (victima.delito === "homicidio doloso") {
                    icon = yellowMarkerIcon;
                } else if (victima.delito === "feminicidio") {
                    icon = cyanMarkerIcon;
                }
                return (
                    <Marker key={victima.id} position={[victima.latitud, victima.longitud]} icon={icon} >
                        <Popup>
                            <Ficha victima={victima} />
                        </Popup>
                    </Marker>
                );
            })}
        </MarkerClusterGroup>
        <Legend activeLayer={props.activeLayer} />
    </MapContainer>


}