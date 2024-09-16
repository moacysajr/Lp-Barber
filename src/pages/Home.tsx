// src/pages/Home.tsx
import { FC } from "react";
import { Midpage } from "@/components/Midpage";
import Price from "@/components/Price";
import { Initial } from "@/components/Initial";
import Test from "@/components/Test";

const Home: FC = () => {
  return (
    <section>
       <Midpage />
	  <Initial />
     <Test></Test>
      <Price />
    </section>
  );
};

export default Home;
