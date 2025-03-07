
import { Feature, Geometry } from 'geojson';
import { alertaColor, carrEstatalcolor, carrFederalcolor, cañadaColor, costaColor, incidenciasColor, istmoColor, mixtecaColor, papaloapanColor, pobreza100Color, pobreza25Color, pobreza50Color, pobreza75Color, polColor, sierraNorteColor, sierraSurColor, vallesCentralesColor } from './colors';

export const styleAlerta = (feature: Feature<Geometry, any> | undefined) => {
    return {
        fillColor: alertaColor,
        color: "#000000",
        weight: .125,
        fillOpacity: feature?.properties.alertaGenero == true ? .5 : 0
    };
};

export const styleRegional = (feature: Feature<Geometry, any> | undefined) => {
    let color: string;

    switch (feature?.properties.region) {
        case "Mixteca":
            color = mixtecaColor;
            break;
        case "Sierra Norte":
            color = sierraNorteColor;
            break;
        case "Sierra Sur":
            color = sierraSurColor;
            break;
        case "Costa":
            color = costaColor;
            break;
        case "Istmo":
            color = istmoColor;
            break;
        case "Cañada":
            color = cañadaColor;
            break;
        case "Valles Centrales":
            color = vallesCentralesColor;
            break;
        case "Papaloapan":
            color = papaloapanColor;
            break;
        default:
            color = "#ffffff";
    }

    return {
        fillColor: color,
        color: "#000000",
        weight: 0.125,
        fillOpacity: 0.2
    };
};

export const stylePobreza = (feature: Feature<Geometry, any> | undefined) => {
    if (feature?.properties.halladas == null) {

        return {
            fillColor: "#ffffff",
            color: "#000000",
            weight: 0.125,
            fillOpacity: 0
        }
    }

    return {
        fillColor: incidenciasColor,
        color: "#000000",
        weight: 0.125,
        fillOpacity: 0.55
    };
};

export const stylePobrezaExt = (feature: Feature<Geometry, any> | undefined) => {
    let opacity = 0;
    const pobreza = Number(feature?.properties.pobreza_ext_por?.replace("%", "").replace(",", "."));

    if (pobreza >= 50 && pobreza <= 100) {
        opacity = 0.35
    }

    return {
        fillColor: pobreza100Color,
        color: "#000000",
        weight: 0.125,
        fillOpacity: opacity
    };
};

export const stylePobrezaV3 = (feature: Feature<Geometry, any> | undefined) => {
    let color;
    const pobreza = Number(feature?.properties.pobreza_ext_por?.replace("%", "").replace(",", "."));

    if (pobreza >= 0 && pobreza < 25) {
        color = pobreza25Color
    } else if (pobreza >= 25 && pobreza < 50) {
        color = pobreza50Color
    } else if (pobreza >= 50 && pobreza < 75) {
        color = pobreza75Color
    } else if (pobreza >= 75 && pobreza <= 100) {
        color = pobreza100Color
    } else {
        color = "#ffffff"
    }

    return {
        fillColor: color,
        color: "#000000",
        weight: 0.125,
        fillOpacity: 0.25
    };
};

export const carrEstatalStyle = {
    color: carrEstatalcolor,
    fillColor: carrEstatalcolor,
    weight: 2,
    fillOpacity: 0
}

export const carrFederalStyle = {
    color: carrFederalcolor,
    fillColor: carrFederalcolor,
    weight: 2,
    fillOpacity: 0
}

export const estadoStyle = {
    color: "#000000",
    weight: 3,
    fillOpacity: 0
}

export const stylePolitica = (feature: Feature<Geometry, any> | undefined) => {
    return {
        fillColor: polColor,
        color: polColor,
        weight: 0.125,
        fillOpacity: feature?.properties.violenciaPolitica >= 1 ? .5 : 0
    };
};