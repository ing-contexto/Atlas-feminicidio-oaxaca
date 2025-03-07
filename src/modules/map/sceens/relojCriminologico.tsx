import { useState } from "react";
import relojM from "../../../assets/reloj_m.png";
import relojH from "../../../assets/reloj_h.png";
import relojAmbos from "../../../assets/reloj_ambos.png";

function RelojCrimi() {
  const [horaMuerte, setHoraMuerte] = useState(true);
  const [horaDenuncia, setHoraDenuncia] = useState(true);

  let imagenMostrar = relojAmbos;
  if (horaMuerte && !horaDenuncia) {
    imagenMostrar = relojM;
  } else if (!horaMuerte && horaDenuncia) {
    imagenMostrar = relojH;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Reloj Criminológico</h1>

      <div className="text-justify mb-4">
        <p>
          Es una herramienta de análisis en la cual se registran las horas en las que se reportan casos de feminicidio en el Estado, con el objetivo de priorizar y enfocar la atención en esos momentos, lo que permite combatir el delito optimizando los recursos en materia de seguridad.
        </p>
      </div>

      <div className="text-justify mb-4">
        <p>
          El análisis basado en el tiempo contribuye a optimizar los recursos en materia de seguridad, orientando la vigilancia y los operativos hacia los períodos de mayor riesgo. Asimismo, esta herramienta es clave para la generación de políticas públicas informadas, promoviendo acciones que refuercen la protección de las mujeres y la reducción de la violencia de género.
        </p>
      </div>

      <div className="border border-gray-300 p-4 rounded-lg mx-auto max-w-xs text-center">
        <p className="font-bold mb-2">Selecciona la(s) opción(es):</p>

        <div className="mb-2 flex items-center justify-center">
          <input
            type="checkbox"
            id="horaMuerte"
            checked={horaMuerte}
            onChange={(e) => setHoraMuerte(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="horaMuerte">Hora de la muerte</label>
        </div>

        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="horaDenuncia"
            checked={horaDenuncia}
            onChange={(e) => setHoraDenuncia(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="horaDenuncia">Hora de denuncia</label>
        </div>
      </div>

      {imagenMostrar && (
        <div className="flex justify-center mt-6">
          <img
            src={imagenMostrar}
            alt="Reloj Criminológico"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      )}
    </div>
  );
}

export default RelojCrimi;