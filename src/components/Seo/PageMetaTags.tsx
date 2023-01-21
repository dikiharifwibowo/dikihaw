import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const publicUrl = 'https://dikihaw.com';
const defaultTitle = 'Dikih Arif Wibowo | Frontend Engineer, JavaScript, Web';
const defaultDescription =
  'Personal site of Dikih Arif Wibowo. I work with JavaScript and all things web. 🌐';
const defaultOgImage = '';

interface Props {
  image?: string;
  title?: string;
  description?: string;
  publishDate?: string;
  readingTime?: string;
}

export const PageMetaTags: React.FC<Props> = ({
  image = defaultOgImage,
  title = defaultTitle,
  description = defaultDescription,
  publishDate = '',
  readingTime = '',
}) => {
  const router = useRouter();
  const url = `${publicUrl}${router.pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Facebook OG meta tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={url} />
      <meta property="twitter:creator" content="@dikiharifwibowo" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:url" content={url} />

      {publishDate ? (
        <>
          <meta name="twitter:label1" content="Published on" />
          <meta name="twitter:data1" content={publishDate} />
        </>
      ) : null}

      {readingTime ? (
        <>
          <meta name="twitter:label2" content="Reading Time" />
          <meta name="twitter:data2" content={readingTime} />
        </>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "${title}",
          "image": ["${image}"],
          "datePublished": "${publishDate}",
          "dateModified": "${publishDate}",
          "author": {
            "@type": "Person",
            "@id": "https://twitter.com/dikiharifwibowo",
            "name": "Dikih Arif Wibowo",
            "url": "https://twitter.com/dikiharifwibowo"
          },
          "publisher": {
              "@type": "Person",
              "@id": "https://twitter.com/dikiharifwibowo",
              "name": "dikiharifwibowo",
              "url": "https://twitter.com/dikiharifwibowo"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dikihaw.com/"
          }
        }`,
        }}
      />
    </Head>
  );
};
