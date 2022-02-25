import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <section className="not-found">
      <h1>Oooops...</h1>
      <h2>The page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">home page</Link>.
      </p>
    </section>
  );
};

export default NotFound;
