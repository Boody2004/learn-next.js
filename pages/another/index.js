import Link from "next/link";
import styles from "../../styles/Another.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { anothers: data },
  };
};

const Another = ({ anothers }) => {
  return (
    <section>
      <h1>Another</h1>

      {anothers.map((another) => (
        <Link href={"/another/" + another.id} key={another.id}>
          <a className={styles.single}>
            <h3>{another.name}</h3>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default Another;
