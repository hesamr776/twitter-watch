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
          data.map(({ id, name, avatar, background }) => (
            <a
              key={id}
              className={styles.twitterAccount}
              href={`/account/${id}?name=${name}&avatar=${avatar}&background=${background}`}
            >
              <TwitterAccount
                id={id}
                name={name}
                avatar={avatar}
                background={background}
              />
            </a>
          ))}
      </main>
    </>
  );
}
