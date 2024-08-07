import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import client from "@/graphql/client";
import Header from "@/components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
