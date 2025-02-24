export default interface Victim {
    id: number
    edad: number
    ocupacion: string
    estadoCivil: string
    hallazgo: {
        latitud: string,
        longitud: string
    }
    orientacion?: string
    identidadGenero?: string
    comunidadIndigena?: string
}