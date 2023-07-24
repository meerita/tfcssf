/** @format */
import Head from 'next/head';
import Link from 'next/link';
import DisplayLarge from '@/components/typography/DisplayLarge';
import Main from '@/components/documentation/main';
import BodyLarge from '@/components/typography/BodyLarge';
import BodyMedium from '@/components/typography/BodyMedium';
import BodySmall from '@/components/typography/BodySmall';
import HeadlineLarge from '@/components/typography/HeadlineLarge';

export default function Manifesto() {
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
        <BodySmall>
          <Link href='/'>Home</Link>
        </BodySmall>
        <DisplayLarge>We've been doing CSS wrong all along</DisplayLarge>
        <BodyLarge>
          We have been programming{' '}
          <abbr title='Cascading Style Sheets'>CSS</abbr> incorrectly for a long
          time. It's time to move forward. By using the Functional CSS
          Framework, the size of the CSS files is drastically reduced. The
          loading, rendering, and painting speed of websites are significantly
          increased. The projects also gain ease of maintenance and become
          easier to understand. Say goodbye to technical debt.
        </BodyLarge>
        <BodyMedium>
          When I started writing CSS in 1996, I was truly excited: the entire
          presentation of an HTML document could be defined on a separate file
          and, consequently, every change I wanted to make reverberated
          everywhere on the website I was maintaining. This, as it sounds, was a
          great deal for us developers. Not having to edit thousands of HTML
          files by hand, always repeating the same changes, was a blessing. But…
          we had a problem: back then, IE 3 was the first browser to support the
          fully CSS 1 standard, so the rest of the population were still using
          Netscape and, as you may suspect, people didn't switch browsers at all
          like we do today. So, we developers had to stick to HTML editing until
          the majority of people switched or upgraded browsers. That was the
          reality around 1996.
        </BodyMedium>
        <BodyMedium>
          It is also true that, even if we only had to rely on HTML, our biggest
          pain came from not having awesome content managers or partials
          features, where you can create pieces of HTML and reuse them
          everywhere. Those who have not yet been taken by the grim reaper
          should know that long ago developers used frames to do all this job.
          It was a very archaic and ugly way to develop, but it was the only
          thing we had. Today, all these things are a kind of urban legend. We
          no longer have connection speed issues, lack of CSS support, or
          serious compatibility issues between browsers. Almost everything we
          mention is quite —but not completely— solved. However, even with all
          this awesomeness, we have created several other kinds of problems.
        </BodyMedium>
        <HeadlineLarge>We have created a monster</HeadlineLarge>
        <BodyMedium>
          We introduced two innovations in the world of CSS: CSS Frameworks and
          CSS Methodologies. CSS Frameworks were recognizable as a set of CSS
          files that provided a base visual style for the UI. One popular
          example was Bootstrap. By simply applying the relevant class, like{' '}
          <code>.btn</code>, to an HTML button element, you could achieve a
          nicely styled button on your website. It appeared to be a fantastic
          idea, but the reality was that most developers ended up modifying or
          adding new styles on top of these frameworks, which increased the
          overall file size of the website. Moreover, many users installed these
          frameworks only to utilize a fraction of the available visual styles,
          resulting in numerous unused classes that occupied unnecessary browser
          memory.
        </BodyMedium>
        <BodyMedium>
          On the other hand, CSS Methodologies were designed to help developers
          architect their visual styles from scratch. They encouraged developers
          to adopt an OOP-style class-based approach, often using preprocessors
          like{' '}
          <a href='https://sass-lang.com/' title='Sass: #teamSass'>
            Sass
          </a>{' '}
          or{' '}
          <a
            href='https://lesscss.org/'
            title='
  Getting started | Less.js
'
          >
            LESS
          </a>
          . These preprocessors allowed the generation of hundreds of classes
          through scripts or nested classes, which could then be compiled into a
          compressed CSS file. While the <code>.scss</code> files may have
          appeared simple and straightforward, the end result often proved
          otherwise. The excessive number of classes and complex styles
          sometimes made it difficult to manage and maintain the codebase
          effectively.
        </BodyMedium>
        <BodyMedium>
          With the advent of component-based frameworks like React, many of the
          traditional uses of CSS became less relevant. Components provided
          faster development and allowed developers to focus more on the actual
          behavior and functionality of their applications. Additionally, by
          adding CSS directly to their modules, developers found it easier to
          maintain their codebase.
        </BodyMedium>
        <BodyMedium>
          However, this progress came with a new challenge: the CSS files
          started to grow larger. While before, CSS frameworks and methodologies
          contributed to larger files, now the bundles generated by tools like
          Webpack are even bigger due to the inclusion of CSS within the
          components. As a result, the loading, rendering, and painting speeds
          of websites are significantly decreased. The increased file size
          impacts website performance, leading to longer loading times and
          slower user experiences.
        </BodyMedium>
        <BodyMedium>
          No matter how much effort I put into creating a better OOP framework
          alternative, all I feel is that sooner or later, the architecture will
          be broken, either by me or other developers.
        </BodyMedium>
        <BodyMedium>
          So, after many years of working with this mindset, in 2015, while
          working on a side project, I decided to use only single-class utility
          to build the grid system. I utilized the CSS3 Grids specification for
          this purpose, and for the rest of the project, I stuck with BEM type
          classes. However, when I began rewriting the project with better React
          components, I had an epiphany moment where I started using more and
          more single classes.
        </BodyMedium>
        <BodyMedium>
          I soon realized that this approach was much better. I compared version
          1, which used a mix of utility classes and BEM, with the rewritten
          version that solely utilized utility classes. Surprisingly, the CSS
          file was much smaller, only 3KB, and yet it achieved the same results.
          But what amazed me even more was the significant difference in
          performance. Version 1 rendered fast as usual, but version 2 rendered
          around 400% faster. The loading, rendering, and painting tasks were
          noticeably smaller. For example, while version 1 loaded all the CSS
          files in 43ms, the one using Functional CSS loaded in just 4ms.
          Similarly, if version 1 took 102ms to render everything, version 2
          only took 16ms. This drastic improvement eliminated all the white
          screen splashes, and the overall memory usage of the app and
          re-renderings were significantly reduced.
        </BodyMedium>
        <BodyMedium>
          Not only that, but months later, when I returned to work on the
          project again, I was pleasantly surprised to find that I could start
          working right away without worrying about the CSS architecture. This
          is another great advantage of working with a functional programming
          approach; it's easier to extend, modify, and work around. There's no
          need to memorize the entire project model to keep working efficiently.
        </BodyMedium>
        <BodyMedium>
          So, after 5 years of working with the functional CSS approach, I
          started a new project that brings the best of the Functional CSS
          world.
        </BodyMedium>
      </Main>
    </>
  );
}
