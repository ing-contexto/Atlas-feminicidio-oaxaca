import { useState } from "react";

import relojM from "../../../assets/reloj_m.png";
import relojH from "../../../assets/reloj_h.png";
import relojAmbos from "../../../assets/reloj_ambos.png";

function RelojCrimi() {
  const [horaMuerte, setHoraMuerte] = useState(true);
  const [horaDenuncia, setHoraDenuncia] = useState(true);

  // Lógica para determinar qué imagen mostrar
  let imagenMostrar = relojAmbos;
  if (horaMuerte && !horaDenuncia) {
    imagenMostrar = relojM;
  } else if (!horaMuerte && horaDenuncia) {
    imagenMostrar = relojH;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Reloj Criminológico</h1>

      <div className="text-justify mx-15 text-lg">
      <p>
      Es una herramienta de análisis en la cual se registran las horas en las que se reportan casos de feminicidio en el Estado, con el objetivo de <strong>priorizar y enfocar la atención</strong> en esos momentos, lo que permite combatir el delito <strong>optimizando los recursos en materia de seguridad</strong>.
      </p>
    </div>
    <br />

    <div className="text-justify mx-15 text-lg">
      <p>
      Para la elaboración de esta herramienta se graficó la hora de muerte, según el acta de defunción, considerando que esta hora es la más cercana al momento del hecho feminicida. El segundo dato que fue graficado fue la hora de la nota criminal, que es el momento en que una autoridad tiene conocimiento del hecho.
      </p>
    </div>
    <br />

    <div className="text-justify mx-15 text-lg">
      <p>
      Así, el Reloj Criminológico que se presenta muestra las horas en que mayormente se asesinan a las mujeres y la hora en que las autoridades advierten dicho asesinato.
      </p>
    </div>
    <br />

    <div className="text-justify mx-15 text-lg">
      <p>
      En conclusión, el Atlas y el Reloj Criminológico son una herramienta que permite identificar ciertos patrones y tener elementos para el análisis del fenómeno social; la cual puede ser consultada por varios sectores de la sociedad, con fines de investigación, consulta estadística y para generar propuestas de políticas públicas y sociales que permitan fomentar acciones en materia de seguridad pública con enfoque de género, interculturalidad y de edad, contrarrestando, así, contextos estructurales y sistemáticos de la violencia feminicida.
      </p>
    </div>

      <br />

      {/* Cuadro con los checkboxes */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "6px",
          margin: "0 auto",
          maxWidth: "300px",
          textAlign: "center"
        }}
      >
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Selecciona la(s) opción(es):</p>

        <div style={{ marginBottom: "5px" }}>
          <input
            type="checkbox"
            id="horaMuerte"
            checked={horaMuerte}
            onChange={(e) => setHoraMuerte(e.target.checked)}
          />
          <label htmlFor="horaMuerte" style={{ marginLeft: "5px" }}>
            Hora de la muerte
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="horaDenuncia"
            checked={horaDenuncia}
            onChange={(e) => setHoraDenuncia(e.target.checked)}
          />
          <label htmlFor="horaDenuncia" style={{ marginLeft: "5px" }}>
            Hora de denuncia
          </label>
        </div>
      </div>

      <br />

      {/* Imagen con tamaño más grande */}
      {imagenMostrar && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <img
            src={imagenMostrar}
            alt="Reloj Criminológico"
            style={{ width: "100%", maxWidth: "1000px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default RelojCrimi;
