import "../../public/style.css";

import { cache } from "emotion";
import { AppProps } from "next/app";

import { CacheProvider } from "@emotion/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}
