import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
config.autoAddCss = false;

import { JetBrains_Mono, Sofia_Sans } from "@next/font/google";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${sofiaSans.style.fontFamily};
        }
      `}
    </style>
    <div className={jetBrainsMono.className}>
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
