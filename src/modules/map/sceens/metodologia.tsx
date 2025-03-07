function Metodologia() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 className="text-3xl font-bold text-center mb-4">Metodología</h1>

    <div className="text-justify md:mx-15 mx-0 text-lg">
      <p>
      Se empleó una metodología mixta, cuanti y cualitativa, que permite tener una visión más completa e integral sobre el fenómeno en cuestión. Los métodos y técnicas mixtas nos permiten obtener una perspectiva amplia y profunda del fenómeno, así como información rica y variada mediante múltiples observaciones desde diversas fuentes, uniendo métodos cuantitativos a través de datos y la transformación de éstos a variables numéricas, gráficas y modelos analíticos; con métodos cualitativos, desde los textos, narrativas, símbolos y elementos visuales. Se combinaron técnicas como la revisión de fuentes, muestreo, georreferenciación y triangulación, que permite tener certeza de la información que se muestra.
      </p>
    </div>
    <br />

    <div className="text-justify md:mx-15 mx-0 text-lg">
      <p>
      La información que se presenta, se toma de las carpetas de investigación, a través de la colaboración con las fiscalías generales, especializadas y vicefiscalías regionales, identificando el delito, datos de la víctima, como edad, sexo, pertenencia a pueblo indígena, orientación sexual, identidad de género y ocupación; posteriormente se corroboró esta información con aquella que fue validada por la Dirección de Análisis e Inteligencia, y así, se georreferenció la información a través de las siguientes herramientas y programas: para categorizar la información estadística se empleo excel; para la elaboración de los mapas, la información fue procesada en Qgis y Python; para verificar la información se usó Google Maps; y para su visualización se utilizó la librería de JavaScript Leaflet.
      </p>
    </div>
    <br />

    <div className="text-justify md:mx-15 mx-0 text-lg">
      <p>
      Para la identificación de los municipios con mayor población que viven en situación de pobreza extrema se tomó información del Consejo Nacional de Evaluación de la Política de Desarrollo Social (CONEVAL) de 2022<sup>1</sup>.
      </p>
    </div>
    <br />

    <div className="text-justify md:mx-15 mx-0 text-lg">
      <p>
      Para identificar los municipios con Alerta de Violencia de Género contra las Mujeres por Violencia Feminicida, se tomó en consideración la Resolución de la Secretaría de Gobernación respecto a la solicitud de Alerta de Violencia de Género contra las Mujeres para el Estado de Oaxaca<sup>2</sup>.
      </p>
    </div>
    <br />
    <div className="text-justify md:mx-15 mx-0 text-lg">
      <p>
      ____________
      <br />
      <sup>1 </sup>Consejo Nacional de Evaluación de la Política de Desarrollo Social (CONEVAL, 2022). <i>Indicadores de pobreza municipal 2010 - 2020</i>. Recuperado de{" "}
      <a
        href="https://datos.gob.mx/busca/dataset/indicadores-de-pobreza-municipal-2010--2020"
        target="_blank"
        rel="noopener noreferrer"
        className="break-all"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        https://datos.gob.mx/busca/dataset/indicadores-de-pobreza-municipal-2010--2020
      </a>
      </p>
    </div>

    <div className="text-justify md:mx-15 mx-0 text-lg">
      <p>
      <sup>2 </sup>Comisión Nacional para Prevenir y Erradicar la Violencia contra las Mujeres (CONAVIM, 2021). <i>Resolución de la Secretaría de Gobernación respecto a la solicitud de Alerta de Violencia de Género contra las Mujeres para el Estado de Oaxaca</i>. Recuperado de{" "}
      <a
        href="https://www.gob.mx/cms/uploads/attachment/file/762557/35._Resoluci_n_de_AVGM_OAX__cumplimiento_sentencia_de_amparo__25_10_2021.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="break-all"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        https://www.gob.mx/cms/uploads/attachment/file/762557/35._Resoluci_n_de_AVGM_OAX__cumplimiento_sentencia_de_amparo__25_10_2021.pdf
      </a>
      </p>
    </div>
    <br />
    </div>
  );
}

export default Metodologia;
