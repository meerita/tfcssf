/** @format */

import '@/styles/root.css';
import '@/styles/normalizer.css';
import '@/styles/generics.css';
import '@/styles/sm.css';
import '@/styles/md.css';
import '@/styles/lg.css';
import '@/styles/xl.css';
import '@/styles/xxl.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
