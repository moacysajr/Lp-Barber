import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";


const Price: React.FC = () => {
  
  const handleTestClick = () => {
    window.location.href = "https://wa.me/5598991892107?text=Olá,%20eu%20quero%20testar%20o%20serviço%20de%20um%20mês%20grátis!";
  };

  return (
    
    <>
      {/* Grid */}
      <div id="prices" className="mt-12 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Card */}
          <Card className="border-primary max-w-xs mx-auto flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              
              <CardTitle className="!mb-7">Pro</CardTitle>
              <span className="font-bold text-4xl">R$59,99</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Todos os recursos ilimitados e mais 
            </CardDescription>
            <CardContent className="flex-grow">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Suporte 24 horas</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Recursos ilimitados</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Suporte 24 horas</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Whatsapp integrado</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">gerenciamento financeiro</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">atualizações em tempo real</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
            <Button   onClick={handleTestClick} className="w-full" variant={"outline"}>
                Assine agora
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          
          {/* Card */}
          <Card className="max-w-xs mx-auto flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <CardTitle className="mb-7">Basico</CardTitle>
              <span className="font-bold text-4xl">R$49,99</span>
            </CardHeader>
            <CardDescription className="text-center">
            Todos os <br />recursos básicos 
            </CardDescription>
            <CardContent className="flex-grow">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">1 usuário</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Recursos basicos</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Suporte ao produto </span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">atualizações em tempo real</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button   onClick={handleTestClick}  className="w-full" variant={"outline"}>
                Assine agora
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
        </div>
      </div>
      {/* End Grid */}
    </>
  );
}

export default Price;
