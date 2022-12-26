import '../styles/globals.css';
import Head from 'next/head';

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Next - Todolist</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
