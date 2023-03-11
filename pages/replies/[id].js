import Head from "next/head";
import { useRouter } from "next/router";

import styles from "@/src/styles/Home.module.css";
import RepliesList from "@/src/components/Replies";

export default function Replies() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Twitter Watch | Replies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>{id && <RepliesList tweetId={id} />}</main>
    </>
  );
}
