import Navbar from "@/components/ui/Navbar";
import Home from "@/components/sections/Home";
import Head from "next/head";

import { JetBrains_Mono } from "@next/font/google";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const Index = () => (
  <>
    <Head>
      <title>Seb Herrera</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={jetBrainsMono.className}>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  </>
);

export default Index;
