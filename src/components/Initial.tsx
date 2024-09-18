import { FocusCards } from "@/components/ui/focus-cards";

export function Initial() {
  const cards = [
    {
      title: "Agendamento Rápido",
      src: "https://utfs.io/f/0b25083e-7fe3-4b0d-9c5c-a697cccc1fff-1vkz7s.jpg",
      description: "Programe seu horário com apenas alguns cliques.",
    },
    {
      title: "Notificações em Tempo Real",
      src: "https://utfs.io/f/0b25083e-7fe3-4b0d-9c5c-a697cccc1fff-1vkz7s.jpg",
      description: "Receba atualizações instantâneas sobre suas reservas.",
    },
    {
      title: "Histórico de Agendamentos",
      src: "https://utfs.io/f/0b25083e-7fe3-4b0d-9c5c-a697cccc1fff-1vkz7s.jpg",
      description: "Acesse um histórico completo de todos os seus agendamentos.",
    },
    {
      title: "Gerenciamento de Perfil",
      src: "https://utfs.io/f/0b25083e-7fe3-4b0d-9c5c-a697cccc1fff-1vkz7s.jpg",
      description: "Atualize suas informações e preferências a qualquer momento.",
    },
    {
      title: "Acesso a Promoções Exclusivas",
      src: "https://utfs.io/f/0b25083e-7fe3-4b0d-9c5c-a697cccc1fff-1vkz7s.jpg",
      description: "Desfrute de ofertas especiais e descontos apenas para usuários do app.",
    },
    {
      title: "Suporte 24/7",
      src: "https://utfs.io/f/0b25083e-7fe3-4b0d-9c5c-a697cccc1fff-1vkz7s.jpg",
      description: "Obtenha ajuda a qualquer hora do dia com nosso suporte dedicado.",
    },
  ];

  return (
   
   
   <div className="py-8 px-4 md:px-8 bg-zinc-900 min-h-screen flex flex-col items-center justify-center">
      {/* Texto adicionado acima dos cards */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          Descubra todas as funcionalidades
        </h1>
       
        <p className="text-lg text-gray-300 mt-2">
          Explore os recursos do nosso app para melhorar sua experiência.
        </p>
      </div>
      
      <FocusCards cards={cards} />
    </div>
  );
}
