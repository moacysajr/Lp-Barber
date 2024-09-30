import React from 'react';
import { Calendar, Bell, Clock, User, Gift, HelpCircle } from 'lucide-react';

type FeatureTitle = "Agendamento Rápido" | "Notificações em Tempo Real" | "Histórico de Agendamentos" | "Gerenciamento de Perfil" | "Acesso a Promoções Exclusivas" | "Suporte 24/7";

interface FeatureIconProps {
  feature: FeatureTitle;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ feature }) => {
  const iconProps = { size: 48, color: "#ffffff" };
  
  switch (feature) {
    case "Agendamento Rápido":
      return <Calendar {...iconProps} />;
    case "Notificações em Tempo Real":
      return <Bell {...iconProps} />;
    case "Histórico de Agendamentos":
      return <Clock {...iconProps} />;
    case "Gerenciamento de Perfil":
      return <User {...iconProps} />;
    case "Acesso a Promoções Exclusivas":
      return <Gift {...iconProps} />;
    case "Suporte 24/7":
      return <HelpCircle {...iconProps} />;
    default:
      return null;
  }
};

interface Card {
  title: FeatureTitle;
  description: string;
}

export function Initial() {
  const cards: Card[] = [
    {
      title: "Agendamento Rápido",
      description: "Programe seu horário com apenas alguns cliques.",
    },
    {
      title: "Notificações em Tempo Real",
      description: "Receba atualizações instantâneas sobre suas reservas.",
    },
    {
      title: "Histórico de Agendamentos",
      description: "Acesse um histórico completo de todos os seus agendamentos.",
    },
    {
      title: "Gerenciamento de Perfil",
      description: "Atualize suas informações e preferências a qualquer momento.",
    },
    {
      title: "Acesso a Promoções Exclusivas",
      description: "Desfrute de ofertas especiais e descontos apenas para usuários do app.",
    },
    {
      title: "Suporte 24/7",
      description: "Obtenha ajuda a qualquer hora do dia com nosso suporte dedicado.",
    },
  ];

  return (
    <div className="py-8 px-12 md:px-8 bg-zinc-900 flex flex-col items-center justify-center">
      <div className="text-center py-12 mb-8">
        <h1 className="text-3xl font-bold text-white">
          Descubra todas as funcionalidades
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Explore os recursos do nosso app para melhorar sua experiência.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center">
            <FeatureIcon feature={card.title} />
            <h3 className="text-xl font-semibold text-white mt-4">{card.title}</h3>
            <p className="text-gray-300 text-center mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}