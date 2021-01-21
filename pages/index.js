import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 Page Not Found!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.heading}>404 NOT FOUND</div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_img}>
            <img src="/Scarecrow.png"></img>
          </div>
        </div>
        <div className={styles.card}>
          <h1>I have bad news for you</h1>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button>Back to homepage</button>
        </div>
      </div>

      <footer className={styles.footer}>Twist ZA @ DevChallenges.io</footer>
    </div>
  );
}
