import imagen from "../../assets/banner_uac_2025.png";

export default function BannerUAC() {
  return (
    <header className="flex justify-left px-2 pb-2">
      <img src={imagen} alt="Banner de la unidad de análisis y contexto" style={{ width: '100%', height: 'auto', maxWidth: '600px', maxHeight: '200px' }} />
    </header>
  );
}
