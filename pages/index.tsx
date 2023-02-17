import Navbar from "@/components/ui/Navbar";
import Home from "@/components/sections/Home";
import Head from "next/head";

const Index = () => (
  <>
    <Head>
      <title>Seb herrera</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Navbar />
      <Home />
    </main>
  </>
);

export default Index;
