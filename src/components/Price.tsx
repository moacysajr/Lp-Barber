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
import { Badge } from "@/components/ui/badge";

const Price: React.FC = () => {
  return (
    <>
      {/* Grid */}
      <div id="prices" className="mt-12 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Card */}
          <Card className="border-primary max-w-xs mx-auto flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <Badge className="uppercase w-max self-center mb-3">
                Mais Popular
              </Badge>
              <CardTitle className="!mb-7">Iniciante</CardTitle>
              <span className="font-bold text-4xl">R$39</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Todos os recursos básicos para começar um novo negócio
            </CardDescription>
            <CardContent className="flex-grow">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">2 usuários</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Recursos do plano</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Suporte ao produto</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Inscreva-se</Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          
          {/* Card */}
          <Card className="max-w-xs mx-auto flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <CardTitle className="mb-7">Gratuito</CardTitle>
              <span className="font-bold text-4xl">Gratuito</span>
            </CardHeader>
            <CardDescription className="text-center">
            Todos os recursos básicos para começar um novo negócio
            </CardDescription>
            <CardContent className="flex-grow">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">1 usuário</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Recursos do plano</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Suporte ao produto</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Inscreva-se
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
