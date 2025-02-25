export default interface Victim {
    id: number
    edad: number
    fechaMuerte: Date
    ocupacion: string
    estadoCivil: string
    latitud: number,
    longitud: number
    orientacion?: string
    identidadGenero?: string
    comunidadIndigena?: string
}