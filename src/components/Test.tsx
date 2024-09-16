
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

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
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
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Test Card */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-yellow-400 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Teste 1 Mês Grátis</h2>
            <p className="text-lg text-gray-600">
              Aproveite esta oferta para experimentar nosso serviço sem compromisso!
            </p>
          </div>
        </div>
      </div>
      {/* End Test Card */}
    </>
  );
}
