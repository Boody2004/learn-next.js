import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>App List | 404</title>
        <meta name="keywords" content="App" />
      </Head>

      <section className="not-found">
        <h1>Oooops...</h1>
        <h2>The page cannot be found.</h2>
        <p>
          Go back to the <Link href="/">home page</Link>.
        </p>
      </section>
    </>
  );
};

export default NotFound;
