"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "./components/chat";

const Home = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <main className={styles.main}>
      {isChatOpen && (
        <div className={styles.container}>
          <div className={styles.chatHeader}>
            <button className={styles.closeButton} onClick={toggleChat}>
              Close
            </button>
            <div className={styles.headerTitle}>FansMaps Help</div>
          </div>
          <Chat />
        </div>
      )}
      <button className={styles.chatButton} onClick={toggleChat}>
        Chat
      </button>
    </main>
  );
};

export default Home;
