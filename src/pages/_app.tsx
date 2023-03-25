import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from 'next/head'
import Link from 'next/link'


import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
      <Layout>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
      </Layout>
    </WishlistProvider>
  );
<script type="text/javascript" src="https://cdn.segment.com/analytics.js/v1/JvO0WHVFapJhlVOT7Lzdee7IwDXLdMMq/analytics.min.js"></script>
}

export default MyApp;
