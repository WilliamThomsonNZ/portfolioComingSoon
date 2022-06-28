import Head from "next/head";
import React, { useState } from "react";
import { introVariants } from "../FramerVariants";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "../components/intro";
import Hero from "../components/hero";

export default function Home() {
  const [introRun, setIntroRun] = useState(false);

  return (
    <div>
      <Head>
        <title>Will - Web3 Development Services</title>
        <meta name="description" content="WEB3 DEVELOPMENT SERVICES" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AnimatePresence>
        {!introRun ? (
          <motion.div
            variants={introVariants.heroContainer}
            animate={"animate"}
            initial={"initial"}
            exit={"exit"}
            key={"Intro"}
          >
            <Intro setLoading={(val) => setIntroRun(val)} />
          </motion.div>
        ) : (
          <Hero />
        )}
      </AnimatePresence>
    </div>
  );
}
