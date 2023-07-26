/** @format */

import Head from 'next/head';
import { Inter } from 'next/font/google';
import DisplayLarge from '@/components/typography/DisplayLarge';
import BodyLarge from '@/components/typography/BodyLarge';
import BodyMedium from '@/components/typography/BodyMedium';
import Link from 'next/link';
import Main from '@/components/documentation/main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>The Functional CSS Framework (TFCSSF)</title>
        <meta
          name='description'
          content='FCSSF (The Functional CSS Framework) is a versatile and lightweight functional CSS framework that simplifies the process of styling web applications. This repository contains the core FCSSF CSS files, a Next.js documentation application, and some basic React components. '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <DisplayLarge>The Functional CSS Framework</DisplayLarge>
        <BodyLarge>
          We've been doing CSS <Link href='/manifesto'>wrong all along.</Link>
        </BodyLarge>
        <BodyMedium>
          FCSSF (The Functional CSS Framework) is a versatile and lightweight
          functional <abbr title='Cascading Style Sheets'>CSS</abbr> framework
          that simplifies the process of styling web applications. This
          repository contains the core FCSSF CSS files, a Next.js documentation
          application, and some basic React components.
        </BodyMedium>
        <ul>
          <li>
            <Link href={'/installation'}>
              <BodyMedium inline>Installation</BodyMedium>
            </Link>
          </li>
          <li>
            <Link href={'/breakpoint'}>
              <BodyMedium inline>The Breakpoints Support Strategy</BodyMedium>
            </Link>
          </li>
        </ul>
      </Main>
    </>
  );
}
