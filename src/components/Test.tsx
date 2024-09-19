import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Test() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleTestClick = () => {
    // Adicione aqui a lógica para quando o botão for clicado, como redirecionar ou abrir uma modal
    alert("Teste 1 mês grátis!");
  };

  return (
    <>
      {/* Hero */}
      <div className="relative bg-zinc-900 overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              TESTE AGORA
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Veja alguns exemplos para montar seu app de agenda!
            </p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <Slider {...settings}>
              <div>
                <img
                  src="https://placehold.co/1024x480"
                  className="rounded-xl"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  src="https://placehold.co/1024x480"
                  className="rounded-xl"
                  alt="Image 2"
                />
              </div>
              <div>
                <img
                  src="https://placehold.co/1024x480"
                  className="rounded-xl"
                  alt="Image 3"
                />
              </div>
            </Slider>
            
            
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Test Button */}
      <div className="py-12 bg-zinc-900">
        <div className="max-w-2xl mx-auto  text-center">
          <button
            onClick={handleTestClick}
            className="bg-yellow-600 p-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
          >
            <h2 className="text-3xl font-bold mb-4">Teste 1 Mês Grátis</h2>
            <p className="text-lg font-bold text-black">
              Aproveite esta oferta para experimentar nosso serviço sem compromisso!
            </p>
          </button>
        </div>
      </div>
      {/* End Test Button */}
    </>
  );
}
