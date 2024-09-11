import { FocusCards } from "@/components/ui/focus-cards";

export function Initial() {
  const cards = [
    {
      title: "Agendamento Rápido",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/calendar-check.svg",
      description: "Programe seu horário com apenas alguns cliques.",
    },
    {
      title: "Notificações em Tempo Real",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/bell.svg",
      description: "Receba atualizações instantâneas sobre suas reservas.",
    },
    {
      title: "Histórico de Agendamentos",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/history.svg",
      description: "Acesse um histórico completo de todos os seus agendamentos.",
    },
    {
      title: "Gerenciamento de Perfil",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/user.svg",
      description: "Atualize suas informações e preferências a qualquer momento.",
    },
    {
      title: "Acesso a Promoções Exclusivas",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/tag.svg",
      description: "Desfrute de ofertas especiais e descontos apenas para usuários do app.",
    },
    {
      title: "Suporte 24/7",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/headset.svg",
      description: "Obtenha ajuda a qualquer hora do dia com nosso suporte dedicado.",
    },
  ];

  return (
    <div className="py-8 px-4 md:px-8 bg-gray-950 min-h-screen flex items-center justify-center">
      <FocusCards cards={cards} />
    </div>
  );
}
