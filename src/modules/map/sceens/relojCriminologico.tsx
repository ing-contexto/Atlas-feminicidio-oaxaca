import { useState } from "react";
import relojM from "../../../assets/reloj_m.png";
import relojH from "../../../assets/reloj_h.png";
import relojAmbos from "../../../assets/reloj_ambos.png";

function RelojCrimi() {
  const [horaMuerte, setHoraMuerte] = useState(true);
  const [horaDenuncia, setHoraDenuncia] = useState(true);

  const handleChangeMuerte = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked && !horaDenuncia) return;
    setHoraMuerte(e.target.checked);
  };

  const handleChangeDenuncia = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked && !horaMuerte) return;
    setHoraDenuncia(e.target.checked);
  };

  let imagenMostrar = relojAmbos;
  if (horaMuerte && !horaDenuncia) {
    imagenMostrar = relojM;
  } else if (!horaMuerte && horaDenuncia) {
    imagenMostrar = relojH;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Reloj Criminológico</h1>

      <div className="text-justify md:mx-15 mx-0 text-lg">
        <p>
          Es una herramienta de análisis en la cual se registran las horas en las que se reportan casos de feminicidio en el Estado, con el objetivo de priorizar y enfocar la atención en esos momentos, lo que permite combatir el delito optimizando los recursos en materia de seguridad.
        </p>
      </div>
      <br />

      <div className="text-justify md:mx-15 mx-0 text-lg">
        <p>
          Para la elaboración de esta herramienta se graficó la hora de muerte, según el acta de defunción, considerando que esta hora es la más cercana al momento del hecho feminicida. El segundo dato que fue graficado es la hora de la nota criminal, que es el momento en que una autoridad tiene conocimiento del hecho.
        </p>
      </div>
      <br />

      <div className="text-justify md:mx-15 mx-0 text-lg">
        <p>
          Así, se muestran los porcentajes de las horas en las que ocurren los hechos de violencia feminicida y del momento en que las autoridades tienen conocimiento de todos los casos sucedidos durante 2024.
        </p>
      </div>
      <br />

      <div className="text-justify md:mx-15 mx-0 text-lg">
        <p>
          En conclusión, el Atlas y el Reloj Criminológico son una herramienta que permite identificar ciertos patrones y tener elementos para el análisis del fenómeno social; la cual puede ser consultada por varios sectores de la sociedad, con fines de investigación, consulta estadística y para generar propuestas de políticas públicas y sociales que permitan fomentar acciones en materia de seguridad pública con enfoque de género, interculturalidad y de edad, contrarrestando, así, contextos estructurales y sistemáticos de la violencia feminicida.
        </p>
      </div>

      <div className="border border-gray-300 p-4 rounded-lg mx-auto max-w-xs text-center">
        <p className="font-bold mb-2">Selecciona la(s) opción(es):</p>

        <div className="mb-2 flex items-center justify-center">
          <input
            type="checkbox"
            id="horaMuerte"
            checked={horaMuerte}
            onChange={handleChangeMuerte}
            className="mr-2"
          />
          <label htmlFor="horaMuerte">Hora de la muerte</label>
        </div>

        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="horaDenuncia"
            checked={horaDenuncia}
            onChange={handleChangeDenuncia}
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
