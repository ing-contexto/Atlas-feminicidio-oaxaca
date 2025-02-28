export default function getGeoJsonData(): Promise<any> {
    const urls = [
        "/geojson/estado.geojson",
        "/geojson/carr_estatal.geojson",
        "/geojson/carr_federal.geojson",
        "/geojson/municipal.geojson",
        "/geojson/regional.geojson",
        "/geojson/mun_pobreza.geojson"
    ];

    return Promise.all(urls.map(url => fetch(url).then(response => response.json())))
        .then(([estado, carr_estatal, carr_federal, municipal, regional, pobreza]) => {
            return [estado, carr_estatal, carr_federal, municipal, regional, pobreza]
        })
        .catch(error => console.error("Error cargando GeoJSON:", error));
}