// src/pages/Home.tsx
import { FC } from "react";

import Price from "@/components/Price";
import { Initial } from "@/components/Initial";
import Test from "@/components/Test";
import { Newmd } from "@/components/Newmd";

const Home: FC = () => {
  return (
    <section>
      <Newmd></Newmd>
      
	  <Initial />
     <Test></Test>
      <Price />
    </section>
  );
};

export default Home;
