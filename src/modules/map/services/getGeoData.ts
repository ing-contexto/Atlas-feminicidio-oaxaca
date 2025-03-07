export default function getGeoJsonData(): Promise<any> {
    const urls = [
        "/geojson/estado.geojson",
        "/geojson/municipal.geojson",
        "/geojson/carr_estatal.geojson",
        "/geojson/carr_federal.geojson",
    ];

    return Promise.all(urls.map(url => fetch(url).then(response => response.json())))
        .then(([estado, municipios, carr_estatal, carr_federal]) => {
            return [estado, municipios, carr_estatal, carr_federal]
        })
        .catch(error => console.error("Error cargando GeoJSON:", error));
}