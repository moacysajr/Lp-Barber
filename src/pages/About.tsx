import { Tecnologies } from "@/constants";
import { FC } from "react";

const About: FC = () => {
  return (
    <section>
      {/* Introdução sobre os criadores */}
      <div className="container my-10">
        <div className="max-w-2xl mx-auto">
          {/* História dos fundadores */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Sobre Nós:</h2>
              <p className="mt-3 text-muted-foreground text-balance">
                Este aplicativo foi criado por dois programadores experientes, João Silva e
                Maria Oliveira, que compartilharam uma visão: transformar o dia a dia dos
                barbeiros e melhorar a experiência de gestão nas barbearias. Com anos de
                experiência em desenvolvimento de software, João e Maria decidiram usar
                sua expertise para criar uma solução que tornasse o agendamento e a gestão
                de clientes mais simples e eficaz.
              </p>
              <p className="mt-3 text-muted-foreground text-balance">
                Eles acreditam que, ao automatizar tarefas administrativas e permitir um
                contato mais direto entre barbeiros e clientes, os profissionais podem se
                concentrar no que realmente importa: oferecer um excelente serviço e 
                construir relacionamentos duradouros.
              </p>
            </div>

            {/* Bloco de Tecnologias */}
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Tecnologias:</h2>
              <p className="mt-3 text-muted-foreground text-balance">
                O aplicativo foi construído utilizando as mais modernas tecnologias para
                garantir uma experiência fluida e intuitiva. Confira abaixo as principais
                ferramentas que fazem esse projeto acontecer:
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {Tecnologies.map((tech, index) => (
                <div className="flex" key={index}>
                  <tech.icon className="flex-shrink-0 mt-2 h-6 w-6" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">{tech.title}</h3>
                    <p className="mt-1 text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Fim Bloco de Tecnologias */}
        </div>
      </div>
      {/* Fim Introdução */}
    </section>
  );
};

export default About;
