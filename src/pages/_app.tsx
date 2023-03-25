import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <script type="text/javascript" src="https://cdn.segment.com/analytics.js/v1/JvO0WHVFapJhlVOT7Lzdee7IwDXLdMMq/analytics.min.js"></script>
    <WishlistProvider>
      <Layout>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
      </Layout>
    </WishlistProvider>
  );
}

export default MyApp;
