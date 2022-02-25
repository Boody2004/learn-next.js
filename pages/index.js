import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>App List | Home</title>
        <meta name="keywords" content="App" />
      </Head>

      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          LoremTempor culpa ullamco occaecat quis nostrud occaecat officia ea
          aliqua aliquip dolore.Non velit ipsum nostrud pariatur et deserunt
          adipisicing irure ipsum pariatur eiusmod id labore. Nulla eu tempor
          nostrud aute et dolor sint. Aliqua proident deserunt sit consequat
          sint ullamco pariatur ipsum nostrud nostrud occaecat laboris id.
          Pariatur cupidatat consequat nostrud anim incididunt veniam sit sint
          eiusmod minim et velit ad. Officia reprehenderit non occaecat irure.
          Elit laborum proident reprehenderit ad cupidatat dolore veniam ad
          aute.
        </p>
        <Link href="/another">
          <a className={styles.btn}>See Another List</a>
        </Link>
      </div>
    </>
  );
}
