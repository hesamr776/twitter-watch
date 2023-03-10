import Head from "next/head";
import styles from "@/src/styles/Home.module.css";

import { useRouter } from "next/router";

import TwitterAccount from "@/src/components/TwitterAccount";
import Audiences from "@/src/components/Audiences";
import Tab, { Tabs, Container } from "@/src/components/Tab";
import { useState } from "react";
import Tweets from "@/src/components/Tweets";

export default function Account() {
  const router = useRouter();
  const account = router.query;
  const [activeTab, setActiveTab] = useState(0);
  console.log(account);
  return (
    <>
      <Head>
        <title>Twitter Watch | Account</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <TwitterAccount {...account} />

        <div style={{ flex: 1 }}>
          <Tabs>
            <Tab
              label="Audiences"
              active={activeTab === 0}
              onClick={() => setActiveTab(0)}
            />
            <Tab
              label="Tweets"
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
          </Tabs>
          {account.id && (
            <Container>
              {activeTab === 0 ? (
                <Audiences id={account.id} />
              ) : (
                <Tweets id={account.id} />
              )}
            </Container>
          )}
        </div>
      </main>
    </>
  );
}
