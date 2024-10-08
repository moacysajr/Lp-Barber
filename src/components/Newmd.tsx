import { useState } from 'react';
import { Link } from "@tanstack/react-router";
import { Box, X } from "lucide-react";
import { Button } from "./ui/button";

interface CardData {
  title: string;
  description: string;
  buttonColor: string;
  imageUrl: string;
  detailImageUrl: string; 
}


export function Newmd(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTest = (): void => {
    // Aqui, vamos usar um ID para rolar até o componente Test
    const testElement = document.getElementById('test-section');
    if (testElement) {
      testElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openImage = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
  };

 

  const cardData: CardData[] = [
    { title: "BARBEARIA", description: "Agendamento para sua barbearia", buttonColor: "zinc-900", imageUrl: "/barbeiro.jpg", detailImageUrl: "/testebarber.png"  },
    { title: "SALÃO", description: "Agendamento para seu salão", buttonColor: "pink-900", imageUrl: "/salão.jpg", detailImageUrl: "/testesalão.jpg"  },
    { title: "MANICURE", description: "Agendamento para Manicure", buttonColor: "yellow-600", imageUrl: "/manicure.jpg" , detailImageUrl: "/testemanicure.jpg"  }
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
            Inicio
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
            style={{ backgroundImage: 'url("/fundo.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-white max-w-lg">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tenha a melhor experiência com agendamento</h2>
              <p className="mb-4 text-lg sm:text-xl">AUMENTE SEU RENDIMENTO MENSSAL EM 70%</p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <button onClick={scrollToTest} className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">TESTE GRÁTIS</button>
                <button onClick={scrollToTest} className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">VER PLANOS</button>
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
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50">
              <div className="text-white text-center p-4">
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-sm mb-4">{card.description}</p>
                <button 
                  className={`text-white py-2 px-4 rounded-md ${card.buttonColor === 'pink-900' ? 'bg-pink-900' : `bg-${card.buttonColor}`}`} // Corrigido para pink-900
                  onClick={() => openImage(card.detailImageUrl)}
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
          <div className="relative max-w-lg w-full"> {/* Limita a largura máxima */}
            <img 
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="w-full h-auto max-h-[80vh] object-contain" 
              /* max-h-[80vh] garante que a imagem não ultrapasse 80% da altura da tela */
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-300"
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