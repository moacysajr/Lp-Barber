// src/pages/Home.tsx
import { FC } from "react";
import { Midpage } from "@/components/Midpage";
import Price from "@/components/Price";
import { Initial } from "@/components/Initial";

const Home: FC = () => {
  return (
    <section>
       <Midpage />
	  <Initial />
     
      <Price />
    </section>
  );
};

export default Home;
