import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import TwitterAccount from "@/src/components/account";
import { useTwitterWatchFetch } from "@/src/utils/fetch";

export default function Home() {
  const { data, isLoading, error } = useTwitterWatchFetch("accounts");
  console.log("home", data, isLoading, error);

  return (
    <>
      <Head>
        <title>Twitter Watch</title>
      </Head>
      <main className={styles.main}>
        <p className={styles.header}>Twitter Account</p>
        {isLoading && "..."}
        {data && <TwitterAccount {...data[0]} />}
      </main>
    </>
  );
}
