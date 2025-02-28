import Victim from "../model/victim";

export default function Ficha(props: { victima: Victim }) {
    return <div>
        <h2 className="text-center font-bold uppercase">{`Víctima`}</h2>
        <p><span className="font-bold">Fecha de muerte: </span>{props.victima.fechaMuerte.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p><span className="font-bold">Ocupación: </span>{props.victima.ocupacion}</p>
        <p><span className="font-bold">Edad: </span>{props.victima.edad}</p>
        <p><span className="font-bold">Estado civil: </span>{props.victima.estadoCivil}</p>
        {props.victima.comunidadIndigena && <p><span className="font-bold">Comunidad indígena: </span>{props.victima.comunidadIndigena}</p>}
        {props.victima.orientacion && <p><span className="font-bold">Orientación sexual: </span>{props.victima.orientacion}</p>}
        {props.victima.identidadGenero && <p><span className="font-bold">Identidad de género: </span>{props.victima.identidadGenero}</p>}
    </div>
}