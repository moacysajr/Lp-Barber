import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "@/components/ui/background-lines"; // Importe o BackgroundLines

export const Midpage: React.FC = () => {
  return (
    <div className="relative">
      {/* Adicione o BackgroundLines para envolver a seção */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Sajana Textiles.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>

      <LampContainer>
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
          <div className="w-16 h-16 mt-[-16rem]"> {/* Ajuste a posição da logo */}
            <img
              src="https://utfs.io/f/OlDhih1IvUhD5pDvqmUwU7AT93rJYnGIXsQvoStq60OV1eHE"
              alt="Barbershop logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-7xl mx-auto px-4"
        >
          <div className="text-center text-white -mt-24">
            <p className="text-xl py-10 md:text-2xl font-bold">
              "O MELHOR EM AGENDAMENTO PARA SUA BARBEARIA"
            </p>
          </div>
          <SimplifiedGridDemo />
        </motion.div>
      </LampContainer>
    </div>
  );
};

function SimplifiedGridDemo() {
  const handleScrollToPrices = () => {
    const pricesSection = document.getElementById("prices");
    if (pricesSection) {
      pricesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div key={card.id} className={`relative overflow-hidden rounded-lg ${card.className}`}>
            <div className="relative w-full h-[50vh]">
              <video
                src={card.thumbnail}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-black bg-opacity-50 flex items-end p-4">
                {card.content}
                <button
                  onClick={handleScrollToPrices}
                  className="absolute bottom-4 right-4  bg-gray-800 text-white px-4 py-2 rounded"
                >
                  TESTE GRÁTIS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SkeletonOne = () => (
  <div className="text-white">
    <p className="font-bold md:text-2xl text-xl">BARBERMG</p>
    <p className="font-normal text-sm mt-2">TESTE 1 MÊS GRÁTIS</p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "https://utfs.io/f/46409dd0-2a7b-462e-a93a-85ddcaf67236-3vhbol.com).mp4",
  },
];

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-100 items-center justify-center isolate z-0 mt-40">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] mt- bg-gradient-conic from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-white opacity-30 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-white blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
