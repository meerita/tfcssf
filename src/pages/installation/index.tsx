/** @format */
import Head from 'next/head';
import Link from 'next/link';
import DisplayLarge from '@/components/typography/DisplayLarge';
import Main from '@/components/documentation/main';
import BodyLarge from '@/components/typography/BodyLarge';
import BodyMedium from '@/components/typography/BodyMedium';
import BodySmall from '@/components/typography/BodySmall';
import HeadlineLarge from '@/components/typography/HeadlineLarge';
import TitleLarge from '@/components/typography/TitleLarge';

export default function Installation() {
  return (
    <>
      <Head>
        <title>Installation - The Functional CSS Framework (TFCSSF)</title>
        <meta
          name='description'
          content='FCSSF (The Functional CSS Framework) is a versatile and lightweight functional CSS framework that simplifies the process of styling web applications. This repository contains the core FCSSF CSS files, a Next.js documentation application, and some basic React components. '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <BodySmall>
          <Link href='/'>Home</Link>
        </BodySmall>
        <DisplayLarge>Installation</DisplayLarge>
        <BodyLarge>
          FCSSF (The Functional CSS Framework) is an agnostic framework. It
          doesn&apos;t require anything to run but a modern browser. However,
          you can use it with any framework or library you want. In this guide,
          we will show you how to install properly.
        </BodyLarge>
        <TitleLarge>Running this project locally</TitleLarge>
        <BodyMedium>
          Go to the TFCSSF repository and clone it. Then, go to the root folder
          and run:
        </BodyMedium>
      </Main>
    </>
  );
}
