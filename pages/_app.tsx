import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { JetBrains_Mono, Sofia_Sans } from "@next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${jetBrainsMono.style.fontFamily};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${sofiaSans.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default App;
