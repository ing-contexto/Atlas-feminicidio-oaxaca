import { useState } from "react";

import relojM from "../../../assets/reloj_m.png";
import relojH from "../../../assets/reloj_h.png";
import relojAmbos from "../../../assets/Reloj.png";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Reloj Criminológico</h1>

      <div style={{ textAlign: "justify" }}>
        <p>
          Es una herramienta de análisis en la cual se registran las horas en las que se reportan casos de feminicidio en el Estado, con el objetivo de priorizar y enfocar la atención en esos momentos, lo que permite combatir el delito optimizando los recursos en materia de seguridad.
        </p>
      </div>

      <br />

      <div style={{ textAlign: "justify" }}>
        <p>
          El análisis basado en el tiempo contribuye a optimizar los recursos en materia de seguridad, orientando la vigilancia y los operativos hacia los períodos de mayor riesgo. Asimismo, esta herramienta es clave para la generación de políticas públicas informadas, promoviendo acciones que refuercen la protección de las mujeres y la reducción de la violencia de género.
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
