import { useState } from "react";
import Head from "next/head";
import styles from "@/src/styles/Home.module.css";

import { useRouter } from "next/router";

import TwitterAccount from "@/src/components/TwitterAccount";
import Audiences from "@/src/components/Audiences";
import Tab, { Tabs, Container } from "@/src/components/Tab";
import Tweets from "@/src/components/Tweets";
import Sentiment from "@/src/components/Sentiment";

export default function Account() {
  const router = useRouter();
  const account = router.query;
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Head>
        <title>Twitter Watch | Account</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <TwitterAccount {...account} />
        {account.username && (
          <Sentiment username={account.username} tab={activeTab} />
        )}

        <div style={{ flex: 1 }}>
          <Tabs>
            <Tab
              label="Tweets"
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
            <Tab
              label="Audiences"
              active={activeTab === 0}
              onClick={() => setActiveTab(0)}
            />
          </Tabs>
          {account.username && (
            <Container>
              {activeTab === 0 ? (
                <Audiences username={account.username} />
              ) : (
                <Tweets username={account.username} />
              )}
            </Container>
          )}
        </div>
      </main>
    </>
  );
}
