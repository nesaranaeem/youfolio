import Main from "@/layouts/Main";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import SEO from "../next-seo.config";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Main>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Main>
    </>
  );
}
