import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Replies() {
  return (
    <>
      <Head>
        <title>Twitter Watch | Replies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>Twitter Watch | Replies</main>
    </>
  );
}
