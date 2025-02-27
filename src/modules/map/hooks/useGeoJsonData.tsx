import { useEffect, useState } from "react";

export default function useGeoJsonData() {
    const [geoJsonData, setGeoJsonData] = useState<{ [key: string]: any }>({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const urls = [
            "/geojson/estado.geojson",
            "/geojson/carr_estatal.geojson",
            "/geojson/carr_federal.geojson",
            "/geojson/municipal.geojson",
            "/geojson/regional.geojson",
            "/geojson/mun_pobreza.geojson"
        ];

        Promise.all(urls.map(url => fetch(url).then(response => response.json())))
            .then(([estado, carr_estatal, carr_federal, municipal, regional, pobreza]) => {
                setGeoJsonData({
                    estado,
                    carr_estatal,
                    carr_federal,
                    municipal,
                    regional,
                    pobreza
                });
                setLoader(false);
            })
            .catch(error => console.error("Error cargando GeoJSON:", error));
    }, []);

    return { geoJsonData, loader };
}