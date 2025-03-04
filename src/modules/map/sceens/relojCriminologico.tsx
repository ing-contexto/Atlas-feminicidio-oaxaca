import relojConPorcentajes from "../../../assets/reloj_con_porcentajes.png?url";


function RelojCrimi() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Reloj Criminológico</h1>
      <div style={{ textAlign: "justify" }}>
        <p>
          Es una herramienta de análisis en la cual se registran las horas en las que se reportan casos de feminicidio en el Estado, con el objetivo de priorizar y enfocar la atención en esos momentos, lo que permite combatir el delito optimizando los recursos en materia de seguridad.
        </p>
      </div>

      <br></br>

      <div style={{ textAlign: "justify" }}>
        <p>
          El análisis basado en el tiempo contribuye a optimizar los recursos en materia de seguridad, orientando la vigilancia y los operativos hacia los períodos de mayor riesgo. Asimismo, esta herramienta es clave para la generación de políticas públicas informadas, promoviendo acciones que refuercen la protección de las mujeres y la reducción de la violencia de género.
        </p>
      </div>

      <br></br>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img
          src={relojConPorcentajes}
          alt="Reloj Criminológico"
          style={{ width: "90%", maxWidth: "800px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default RelojCrimi;
