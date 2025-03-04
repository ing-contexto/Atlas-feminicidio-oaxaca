function Acerca() {
    return (
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Acerca del Atlas Feminicida de Oaxaca</h1>
      <h2 className="text-2xl font-bold text-left mb-4">Metodología</h2>
      <div style={{ textAlign: "justify" }}>
        <p>
        Se empleó una metodología mixta, cuanti y cualitativa, que permite tener una visión más completa e integral sobre el fenómeno en cuestión. Los métodos y técnicas mixtas nos permiten obtener una perspectiva amplia y profunda del fenómeno, así como información rica y variada mediante múltiples observaciones desde diversas fuentes, uniendo métodos cuantitativos a través de datos y la transformación de éstos a variables numéricas, gráficas y modelos analíticos; con métodos cualitativos, desde los textos, narrativas, símbolos y elementos visuales.
        </p>
      </div>
      <br></br>

      <div style={{ textAlign: "justify" }}>
        <p>
        Se combinaron técnicas como la revisión de fuentes, muestreo, georreferenciación y triangulación, esta última entendida como la interpretación e incremento de evidencia mediante el uso de diferentes métodos que proporcionan mayor seguridad y certeza en las conclusiones.
        </p>
      </div>
      <br></br>

      <div style={{ textAlign: "justify" }}>
        <p>
        La información que se presenta, se toma de las carpetas de investigación, a través de la colaboración con las fiscalías generales, especializadas y las vicefiscalías regionales, identificando el delito, datos de la víctima, como edad, sexo, pertenencia a pueblo indígena, orientación sexual, identidad de género y ocupación; posteriormente se corroboró esta información con aquella que fue validada por la Dirección de Análisis e Inteligencia, y así, se georreferenció la información a través de las siguientes herramientas y programas: para la información estadística categorizada el Excel. Para la elaboración de los mapas, la información fue procesada en Qgis y Python, para verificar la información se usó Google Maps, para su visualización se utilizó la librería de JavaScript Leaflet.
        </p>
      </div>
      <br></br>

    </div>
    );
  }
  
  export default Acerca;
  
