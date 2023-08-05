import type { AppProps } from "next/app";
import "../app/assets/styles/global.scss";
import MainProvider from "../app/providers/MainProvider";
import { TypeComponentAuthFields } from "../app/shared/types/auth.types";

type TypeAppProps = AppProps & TypeComponentAuthFields;

export default function App({ Component, pageProps }: TypeAppProps) {
  return (
    <MainProvider Component={Component}>
      {/* <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head> */}
      <Component {...pageProps} />
    </MainProvider>
  );
}
