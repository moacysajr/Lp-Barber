"use client";

import { Link } from "@tanstack/react-router";
import { Box } from "lucide-react";

import { Button } from "./ui/button";

export function Newmd() {
  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Faz a rolagem suave
    });
  };

  return (
    <>
      {/* Barra de Navegação */}
      <div className='py-3 px-3 sm:px-7 fixed top-0 left-0 w-full flex items-center justify-between z-50 bg-transparent'>
        <div className='inline-flex flex-shrink-0 items-center'>
          <Box className='size-7 mr-1' />
          <span className='font-bold'>LOGO</span>
        </div>
        <div className='inline-flex gap-1 sm:gap-3 text-sm sm:text-base'>
          {/* Botão Home que rola para o topo */}
          <Button variant={"ghost"} className='[&.active]:bg-secondary' onClick={scrollToTop}>
            Home
          </Button>
          <Button asChild variant={"ghost"} className='[&.active]:bg-secondary'>
            <Link to='/about'>Sobre</Link>
          </Button>
         
        </div>
      </div>
  
  

      <main>
        {/* Seção com Imagem de Fundo */}
  <section className="relative h-[30rem]"> {/* Aumentei a altura para 40rem (640px) */}
    {/* Imagem de fundo */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url("https://via.placeholder.com/1200x800")' }} // Substitua com a URL da sua imagem
    ></div>
    {/* Sobreposição escura para melhorar a legibilidade do texto */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    {/* Conteúdo da seção */}
    <div className="absolute inset-0 flex items-center justify-start px-48">
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-4">Tenha a melhor experiência com agendamento</h2>
        <p className="mb-4">FAÇA UM TESTE DE 1 MES GRATIS</p>
        <div className="space-x-4">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded">TESTE GRATIS</button>
          <button className="border border-white text-white px-4 py-2 rounded">VER PLANOS</button>
        </div>
      </div>
    </div>
        </section>

        {/* Seção de Cards com Imagens */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://via.placeholder.com/300x200" // Substitua com a URL da sua imagem
                alt="Haircut & Shampoo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold mb-2">Haircut & Shampoo</h3>
                  <p className="text-sm mb-4">Professional care for your hair style and health</p>
                  <button className="text-yellow-600 bg-white py-2 px-4 rounded-md">READ MORE</button>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://via.placeholder.com/300x200" // Substitua com a URL da sua imagem
                alt="Beard & Mustache"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold mb-2">Beard & Mustache</h3>
                  <p className="text-sm mb-4">Expert grooming for your facial hair</p>
                  <button className="text-white bg-yellow-600 py-2 px-4 rounded-md">READ MORE</button>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://via.placeholder.com/300x200" // Substitua com a URL da sua imagem
                alt="Specials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold mb-2">Specials</h3>
                  <p className="text-sm mb-4">Check out our special offers and packages</p>
                  <button className="text-white bg-zinc-900 py-2 px-4 rounded-md">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
