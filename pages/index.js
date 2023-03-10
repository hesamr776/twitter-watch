import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import TwitterAccount from "@/src/components/TwitterAccount";
import { useFetch } from "@/src/hooks/useFetch";

export default function Home() {
  const { data, isLoading } = useFetch("accounts");

  return (
    <>
      <Head>
        <title>Twitter Watch</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <p className={styles.header}>Select an Account</p>
        {isLoading && "..."}
        {data &&
          data.map(({ username, name }) => (
            <a
              key={username}
              className={styles.twitterAccount}
              href={`/account/${username}?name=${name}`}
            >
              <TwitterAccount username={username} name={name} />
            </a>
          ))}
      </main>
    </>
  );
}
