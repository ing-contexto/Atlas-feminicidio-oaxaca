import { useState, ReactNode } from "react";

interface CollapsibleMenuProps {
    title: string;
    children: ReactNode;
}

function CollapsibleMenu({ title, children }: CollapsibleMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-4 border rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
                <span className="text-lg font-semibold">{title}</span>
                <span>{isOpen ? "^" : "v"}</span>
            </button>
            <div
                className={`transition-max-height duration-200 overflow-hidden ${isOpen ? '' : 'max-h-0'}`}
            >
                <div className="p-4 border-t bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function MarcoJuridico() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Marco jurídico</h1>
            <CollapsibleMenu title="Convención sobre la Eliminación de todas las formas de Discriminación contra la Mujer (CEDAW)">
                <p>
                    <span className="font-bold">Artículo 1.</span> A los efectos de la presente Convención, la expresión “discriminación contra la mujer denotará toda distinción, exclusión o restricción basada en el sexo que tenga por objeto o resultado menoscabar o anular el reconocimiento, goce o ejercicio por la mujer, independientemente de su estado civil, sobre la base de la igualdad del hombre y la mujer, de los derechos humanos y las libertades fundamentales en las esferas política, económica, social, cultural y civil o en cualquier otra esfera.
                </p>
            </CollapsibleMenu>
            <CollapsibleMenu title="Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer (Convención Belem Do Pará)">
                <p>
                    <span className="font-bold">Artículo 1.</span> Para los efectos de esta Convención debe entenderse por violencia contra la mujer cualquier acción o conducta, basada en su género, que cause muerte, daño o sufrimiento físico, sexual o psicológico a la mujer, tanto en el ámbito público como en el privado.
                </p>
                <p>
                    <span className="font-bold">Artículo 2.</span> Se entenderá que violencia contra la mujer incluye la violencia física, sexual y psicológica: </p>
                <p className="ml-2">a. que tenga lugar dentro de la familia o unidad doméstica o en cualquier otra relación interpersonal, ya sea que el agresor comparta o haya compartido el mismo domicilio que la mujer, y que comprende, entre otros, violación, maltrato y abuso sexual;
                </p>
                <p className="ml-2">b. que tenga lugar en la comunidad y sea perpetrada por cualquier persona y que comprende, entre otros, violación, abuso sexual, tortura, trata de personas, prostitución forzada, secuestro y acoso sexual en el lugar de trabajo, así como en instituciones educativas, establecimientos de salud o cualquier otro lugar, y
                </p>
                <p className="ml-2">c. que sea perpetrada o tolerada por el Estado o sus agentes, donde quiera que ocurra.
                </p>
                <p>
                    <span className="font-bold">Artículo 3.</span> Toda mujer tiene derecho a una vida libre de violencia, tanto en el ámbito público como en el privado.
                </p>
                <p><span className="font-bold">Artículo 4.</span> Toda mujer tiene derecho al reconocimiento, goce, ejercicio y protección de todos los derechos humanos y a las libertades consagradas por los instrumentos regionales e internacionales sobre derechos humanos. Estos derechos comprenden, entre otros:
                </p>
                <p className="ml-2">a. el derecho a que se respete su vida;
                </p>
                <p className="ml-2">b. el derecho a que se respete su integridad física, psíquica y moral;
                </p>
                <p className="ml-2">c. el derecho a la libertad y a la seguridad personales;
                </p>
                <p className="ml-2">d. el derecho a no ser sometida a torturas;
                </p>
                <p className="ml-2">f. el derecho a igualdad de protección ante la ley y de la ley;
                </p>
            </CollapsibleMenu>
            <CollapsibleMenu title="Ley General de Acceso de las Mujeres a una Vida Libre de Violencia">
                <p>
                    <span className="font-bold">ARTÍCULO 1.</span>La presente ley es reglamentaria del artículo 4o. de la Constitución Política de los Estados Unidos Mexicanos, en materia de protección del derecho de las mujeres, adolescentes y niñas a una vida libre de violencias y los deberes reforzados del Estado, sus disposiciones son de orden público y de observancia general en toda la República, y tiene por objeto establecer la coordinación entre la Federación, las entidades federativas, las demarcaciones territoriales de la Ciudad de México y los municipios para prevenir, atender, sancionar y erradicar las violencias contra las mujeres, adolescentes y niñas, así como los principios y mecanismos para el pleno acceso a una vida libre de violencias, así como para garantizar el goce y ejercicio de sus derechos humanos y fortalecer el régimen democrático establecido en la Constitución Política de los Estados Unidos Mexicanos.
                </p>
                <p><span className="font-bold">ARTÍCULO 3.</span> Todas las medidas que se deriven de la presente ley, garantizarán la prevención, la atención, la sanción y la erradicación de todos los tipos de violencia contra las mujeres durante su ciclo de vida y para promover su desarrollo integral y su plena participación en todas las esferas de la vida.
                </p>
                <p><span className="font-bold">ARTÍCULO 21.</span> Violencia Feminicida: Es la forma extrema de violencia de género contra las mujeres, las adolescentes y las niñas, producto de la violación de sus derechos humanos y del ejercicio abusivo del poder, tanto en los ámbitos público y privado, que puede conllevar impunidad social y del Estado. Se manifiesta a través de conductas de odio y discriminación que ponen en riesgo sus vidas o culminan en muertes violentas como el feminicidio, el suicidio y el homicidio, u otras formas de muertes evitables y en conductas que afectan gravemente la integridad, la seguridad, la libertad personal y el libre desarrollo de las mujeres, las adolescentes y las niñas.
                    En los casos de feminicidio se aplicarán las sanciones previstas en la legislación penal sustantiva.
                </p>
            </CollapsibleMenu>
            <CollapsibleMenu title="Código Penal Federal">
                <p>
                    <span className="font-bold">Artículo 325.</span> Comete el delito de feminicidio quien prive de la vida a una mujer por una razón de género.
                    Se considera que existe una razón de género cuando concurra cualquiera de las siguientes circunstancias:
                </p>
                <p className="ml-2">I.La víctima presente signos de violencia sexual de cualquier tipo;
                </p>
                <p className="ml-2">II. A la víctima se le hayan infligido lesiones o mutilaciones infamantes o degradantes, previas o posteriores a la privación de la vida o actos de necrofilia;
                </p>
                <p className="ml-2">III.Existan antecedentes o datos de cualquier tipo de violencia en el ámbito familiar, laboral, comunitario, político o escolar, del sujeto activo en contra de la víctima;
                </p>
                <p className="ml-2">IV. Haya existido entre el sujeto activo y la víctima parentesco por consanguinidad o afinidad o una relación sentimental, afectiva, laboral, docente, de confianza o alguna relación de hecho entre las partes;
                </p>
                <p className="ml-2">V.Existan datos que establezcan que hubo amenazas directas o indirectas relacionadas con el hecho delictuoso, acoso o lesiones del sujeto activo en contra de la víctima;
                </p>
                <p className="ml-2">VI.La víctima haya sido incomunicada, cualquiera que sea el tiempo previo a la privación de la vida;
                </p>
                <p className="ml-2">VII.El cuerpo de la víctima sea expuesto, arrojado, depositado o exhibido en un lugar público, o
                </p>
                <p className="ml-2 mb-4">VIII.El sujeto activo haya obligado a la víctima a realizar una actividad o trabajo o haya ejercido sobre ella cualquier forma de explotación.
                </p>
                <p className="mb-4">
                    A quien cometa el delito de feminicidio se le impondrán de cuarenta a sesenta años de prisión y de quinientos a mil días multa.
                </p>
                <p className="mb-4">
                    La pena se agravará hasta en un tercio cuando la víctima sea mujer menor de edad, embarazada, adulta mayor o con discapacidad, así como cuando el sujeto activo sea servidor público y haya cometido la conducta valiéndose de esta condición.
                    Además de las sanciones descritas en el presente artículo, el sujeto activo perderá todos los derechos con relación a la víctima, incluidos los de carácter sucesorio. En su caso, también perderá todo derecho con relación a los hijos de la víctima, garantizando el interés superior de la niñez en términos de lo previsto por la Ley General de los Derechos de Niñas, Niños y Adolescentes.
                </p>
                <p className="mb-4">
                    Al servidor público que retarde o entorpezca maliciosamente o por negligencia la procuración o administración de justicia se le impondrá pena de prisión de tres a ocho años y de quinientos a mil quinientos días multa, además será destituido e inhabilitado de tres a diez años para desempeñar otro empleo, cargo o comisión públicos.
                </p>
            </CollapsibleMenu>
            <CollapsibleMenu title="Ley Estatal de Acceso de las Mujeres a una Vida Libre de Violencia">
                <p className="mb-4">
                    <span className="font-bold">Artículo 19 Bis.</span>
                    Violencia Feminicida: Es la forma extrema de violencia de género contra las mujeres, producto de la violación de sus derechos humanos, en los ámbitos público y privado, conformada por el conjunto de conductas misóginas que pueden conllevar impunidad social y del Estado y pueden culminar en feminicidio y otras formas de muerte violenta de mujeres.
                </p>
                <p>
                    El protocolo de investigación Ministerial, Policial y Pericial del Delito de Feminicidio para el Estado de Oaxaca, deberá:
                </p>
                <p className="ml-2">I. Enfocar transversalmente la investigación pericial, ministerial y policial con perspectiva de género.
                </p>
                <p className="ml-2">II. Analizar las conexiones que existan entre la víctima y la violación a otros derechos humanos.
                </p>
                <p className="ml-2">III. Evitar los juicios de valor hacia las conductas o comportamiento anterior de la víctima.
                </p>
                <p className="ml-2">IV. Diferenciar los feminicidios de las muertes de mujeres ocurridas en otros contextos.
                </p>
            </CollapsibleMenu>
            <CollapsibleMenu title="Código Penal para el Estado libre y Soberano de Oaxaca">
                <p>
                    <span className="font-bold">Feminicidio</span>
                </p>
                <p>

                    <span className="font-bold">ARTÍCULO 411.</span>
                </p>
                <p>
                    Comete el delito de feminicidio quien prive de la vida a una mujer por una razón de género.
                </p>
                <p>
                    Se considera que existe una razón de género cuando ocurra cualquiera de las siguientes circunstancias:
                </p>
                <p className="ml-2">
                    I. La víctima o los restos de la víctima presenten signos de violencia sexual de cualquier tipo.
                </p>
                <p className="ml-2">II. A la víctima se le hayan infligido heridas, traumatismos, escoriaciones, contusiones, decapitamiento, desollamiento, fracturas, dislocaciones, cortes, quemaduras, signos de asfixia, estrangulamiento, tortura, desmembramiento de partes del cuerpo o cualquier tipo de lesiones o mutilaciones, internas o externas, infamantes o degradantes, previas o posteriores a la privación de la vida o actos de necrofilia.
                </p>
                <p className="ml-2">III. Existan datos, información, antecedentes, o indicios, denunciados o no, que refieran cualquier tipo de violencia en el ámbito familiar, laboral, escolar, comunitario, institucional, político o digital o cualquier otro, del sujeto activo en contra de la víctima, aun cuando no haya denuncia, querella o cualquier otro tipo de registro.
                </p>
                <p className="ml-2">IV. Existan datos, información, antecedentes, o indicios, denunciados o no, que establezcan que hubo amenazas, agresiones, intimidación, acoso, maltrato o lesiones del sujeto activo en contra de la víctima, incluidas aquellas encaminadas a limitar, anular o menoscabar los derechos políticos y electorales de la víctima o el ejercicio de un cargo político, público, de poder o de decisión.
                </p>
                <p className="ml-2">V. Haya existido, entre el activo y la víctima una relación sentimental, afectiva, de confianza, de parentesco por consanguinidad, afinidad, matrimonio, concubinato, sociedad de convivencia, cohabitación, noviazgo o cualquier otra relación de hecho o amistad.
                </p>
                <p className="ml-2">VI. Haya existido entre el sujeto activo y la víctima, una relación laboral, docente, religiosa, institucional o cualquier otra que implique, de manera formal o de hecho, una relación de subordinación o superioridad.
                </p>
                <p className="ml-2">VII. Por desprecio u odio a la víctima motivado por discriminación o misoginia.
                </p>
                <p className="ml-2">VIII. La víctima se haya encontrado en un estado de indefensión, entendiéndose este como la situación de desprotección real o incapacidad de defensa, causada por un impedimento físico, psicológico o material para solicitar el auxilio, incluyendo factores externos que inhiban su capacidad de defensa o conciencia, como el estado de somnolencia, alcoholemia, consumo de fármacos o drogas, ya sea voluntario o involuntario.
                </p>
                <p className="ml-2">IX. La víctima haya sido incomunicada o privada de su libertad, cualquiera que sea el tiempo previo a su muerte.
                </p>
                <p className="ml-2">X. El cuerpo, cadáver o restos de la víctima hayan sido enterrados, ocultados, incinerados o sometidos a cualquier sustancia que lo desintegre.
                </p>
                <p className="ml-2">
                    XI. El cuerpo, cadáver o restos de la víctima hayan sido expuestos, abandonados, exhibidos, depositados, arrojados o enterrados en un lugar público, o de uso común o cualquier espacio de libre concurrencia.
                    Se entenderá como desprecio u odio cuando el activo realice conductas humillantes o degradantes, antes o durante la privación de la vida, así como actos de profanación al cadáver, incluidos actos de necrofilia.
                    Se entiende por misoginia las conductas de odio contra la mujer que se manifiestan mediante actos violentos o crueles contra ella.
                    Todas las muertes violentas de una mujer, incluidas aquellas que en principio parecieran haber sido causadas por motivos criminales, suicidio y algunos accidentes, deben investigarse como probable feminicidio. Cuando no se acredite el feminicidio se aplicarán las reglas del homicidio.
                </p>
            </CollapsibleMenu>
        </div>
    );
}