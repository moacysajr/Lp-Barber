import { useState } from 'react';
import { Link } from "@tanstack/react-router";
import { Box, X } from "lucide-react";
import { Button } from "./ui/button";

interface CardData {
  title: string;
  description: string;
  buttonColor: string;
  imageUrl: string; // Adicionei imageUrl para cada card ter uma imagem específica
}

export function Newmd(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTofinal = (): void => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  const openImage = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
  };

  const closeImage = (): void => {
    setSelectedImage(null);
  };

  // Adicionei URLs específicas para cada imagem
  const cardData: CardData[] = [
    { title: "BARBEARIA", description: "Agendamento para sua barbearia", buttonColor: "yellow-600", imageUrl: "https://utfs.io/f/OlDhih1IvUhDgkzEC5TOwhQ1VuE4of6LiNAFWtYDPkI80bHl" },
    { title: "SALÃO", description: "Agendamento para seu salão", buttonColor: "yellow-600", imageUrl: "https://utfs.io/f/OlDhih1IvUhDjH9TbNlB7wIhgVP1OXifkNq8LncaJdCse403" },
    { title: "MANICURE", description: "Agendamento para Manicure", buttonColor: "zinc-900", imageUrl: "https://utfs.io/f/OlDhih1IvUhDqRXArZgsU3rklqmaPQTG5CZWNdRhxp1vH7iK" }
  ];

  return (
    <>
      {/* Barra de Navegação */}
      <div className='py-3 px-3 sm:px-7 fixed top-0 left-0 w-full flex items-center justify-between z-50 bg-transparent'>
        <div className='inline-flex flex-shrink-0 items-center'>
          <Box className='size-7 mr-1' />
          <span className='font-bold'>LOGO</span>
        </div>
        <div className='inline-flex gap-1 sm:gap-3 text-sm sm:text-base'>
          <Button variant="ghost" className='[&.active]:bg-secondary' onClick={scrollToTop}>
            Home
          </Button>
          <Button asChild variant="ghost" className='[&.active]:bg-secondary'>
            <Link to='/about'>Sobre</Link>
          </Button>
        </div>
      </div>

      <main>
        {/* Seção com Imagem de Fundo */}
        <section className="relative h-[35rem]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://utfs.io/f/OlDhih1IvUhDwfYF3IkzYuTKRFmxLQPoGh8tCvyHp9c6jgeO")' }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-white max-w-lg">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tenha a melhor experiência com agendamento</h2>
              <p className="mb-4 text-lg sm:text-xl">AUMENTE SEU DESEMPENHO EM 100%</p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <button onClick={scrollTofinal} className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">TESTE GRÁTIS</button>
                <button onClick={scrollTofinal} className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">VER PLANOS</button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Cards com Imagens */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={card.imageUrl} // Cada card agora tem uma imagem única
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold mb-2">{card.title}</h3>
                    <p className="text-sm mb-4">{card.description}</p>
                    <button 
                      className={`text-white bg-${card.buttonColor} py-2 px-4 rounded-md`}
                      onClick={() => openImage(card.imageUrl)}
                    >
                      Veja Melhor
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal para imagem ampliada */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-3xl w-full">
              <img src={selectedImage} alt="Imagem ampliada" className="w-full h-auto" />
              <button 
                onClick={closeImage}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
