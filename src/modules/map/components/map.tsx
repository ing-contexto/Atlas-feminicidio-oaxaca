import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import Victim from "../model/victim";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";

const styleAlerta = (feature: any) => {
    return {
        fillColor: "#60f482",
        color: "#000000",
        weight: .125,
        fillOpacity: feature.properties.alertaGenero == true ? .35 : 0
    };
};

const styleRegional = (feature: any) => {
    let color: string;

    switch (feature.properties.region) {
        case "Mixteca":
            color = "#ff0000";
            break;
        case "Sierra Norte":
            color = "#00ff00";
            break;
        case "Sierra Sur":
            color = "#0000ff";
            break;
        case "Costa":
            color = "#ffff00";
            break;
        case "Istmo":
            color = "#ff00ff";
            break;
        case "Cañada":
            color = "#00ffff";
            break;
        case "Valles Centrales":
            color = "#ffa500";
            break;
        case "Papaloapan":
            color = "#800080";
            break;
        default:
            color = "#ffffff";
    }

    return {
        fillColor: color,
        color: "#000000",
        weight: 0.125,
        fillOpacity: 0.1
    };
};


export default function Map(props: { victims: Victim[], regions: boolean, alert: boolean }) {
    const [geoJsonData, setGeoJsonData] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        const urls = [
            "/geojson/estado.geojson",
            "/geojson/carr_estatal.geojson",
            "/geojson/carr_federal.geojson",
            "/geojson/municipal.geojson",
            "/geojson/regional.geojson"
        ];

        Promise.all(urls.map(url => fetch(url).then(response => response.json())))
            .then(([estado, carr_estatal, carr_federal, municipal, regional]) => {
                setGeoJsonData({
                    estado,
                    carr_estatal,
                    carr_federal,
                    municipal,
                    regional
                });
            })
            .catch(error => console.error("Error cargando GeoJSON:", error));
    }, []);

    const bounds: [LatLngTuple, LatLngTuple] = [
        [18.419107308645803, -98.43295461507425],
        [15.865712048666351, -93.81846189492535]
    ];

    return (
        <MapContainer
            center={[17.064238826943054, -96.72367769482949]}
            zoom={8}
            className="w-11/12 h-[70vh] sm:w-5/6"
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            minZoom={8}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />


            {geoJsonData.carr_estatal && <GeoJSON data={geoJsonData.carr_estatal}
                style={() => ({
                    color: "#ff9e01",
                    fillColor: "#ff9e01",
                    weight: 2,
                    fillOpacity: 0
                })} />
            }
            {geoJsonData.carr_federal && <GeoJSON data={geoJsonData.carr_federal}
                style={() => ({
                    color: "#ff0116",
                    fillColor: "#ff0116",
                    weight: 2,
                    fillOpacity: 0
                })} />
            }

            {geoJsonData.estado && <GeoJSON data={geoJsonData.estado}
                style={() => ({
                    color: "#000000",
                    fillColor: "#ffcccc",
                    weight: 3,
                    fillOpacity: 0
                })} />
            }

            {geoJsonData.municipal && props.alert && <GeoJSON data={geoJsonData.municipal}
                style={styleAlerta} />
            }

            {geoJsonData.regional && props.regions && <GeoJSON data={geoJsonData.regional}
                style={styleRegional} />
            }

            <MarkerClusterGroup key={props.victims.map(v => v.id).join('-')} >
                {props.victims.map((marker, index) => (
                    <Marker key={marker.id} position={[marker.latitud, marker.longitud]}>
                        <Popup>
                            <div>
                                <h2 className="text-center font-bold uppercase">{`Víctima ${index + 1}`}</h2>
                                <p><span className="font-bold">Fecha de muerte: </span>{marker.fechaMuerte.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</p>
                                <p><span className="font-bold">Ocupación: </span>{marker.ocupacion}</p>
                                <p><span className="font-bold">Edad: </span>{marker.edad}</p>
                                <p><span className="font-bold">Estado civil: </span>{marker.estadoCivil}</p>
                                {marker.comunidadIndigena && <p><span className="font-bold">Comunidad indígena: </span>{marker.comunidadIndigena}</p>}
                                {marker.orientacion && <p><span className="font-bold">Orientación sexual: </span>{marker.orientacion}</p>}
                                {marker.identidadGenero && <p><span className="font-bold">Identidad de género: </span>{marker.identidadGenero}</p>}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
