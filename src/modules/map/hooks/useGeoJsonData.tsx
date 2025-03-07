import { useEffect, useState } from "react";
import getGeoJsonData from "../services/getGeoData";

export default function useGeoJsonData() {
    const [geoJsonData, setGeoJsonData] = useState<{ [key: string]: any }>({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getGeoJsonData().then(([estado, municipios, carr_estatal, carr_federal]) => {
            setGeoJsonData({
                estado,
                municipios,
                carr_estatal,
                carr_federal,
            });
            setLoader(false);
        })
            .catch(error => console.error("Error cargando GeoJSON:", error));
    }, []);

    return { geoJsonData, loader };
}