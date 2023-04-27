import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  image: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://wisharoo.ponnle.xyz/" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:locale" content="en_gb" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://wisharoo.ponnle.xyz/" />
      <meta property="og:site_name" content="Wisharoo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Meta;
