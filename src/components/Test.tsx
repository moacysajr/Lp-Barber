
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Test() {
  const handleTestClick = () => {
    window.location.href = "https://wa.me/5598991892107?text=Olá,%20eu%20quero%20testar%20o%20serviço%20de%20um%20mês%20grátis!";
  };

  return (
    <>
      <div id="test-section" className="relative bg-zinc-900 overflow-hidden py-16 lg:py-24">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
              Veja no video abaixo 
            </h1>
            <p className="mt-3 text-xl text-muted-foreground text-white">
             Entre em contato para um teste AGORA
            </p>
          </div>
          <div className="mt-6 relative max-w-5xl mx-auto">
            <div>
              <video
                className="rounded-xl w-full h-auto"
                controls
                src="videobarber.mp4" // Substitua pelo URL do seu vídeo
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-zinc-900 py-8">
        <div className="max-w-2xl text-center">
          <button
            onClick={handleTestClick}
            className="bg-yellow-600 p-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Teste 1 Mês Grátis</h2>
            <p className="text-lg font-bold text-white">
              Aproveite esta oferta para experimentar nosso serviço sem compromisso!
            </p>
          </button>
        </div>
      </div>
    </>
  );
}