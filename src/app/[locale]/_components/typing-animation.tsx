"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = ["Front-end Developer", "Full Stack Developer"];

export default function TypingLoop() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < texts[index].length) {
      timeout = setTimeout(() => {
        setDisplayed(texts[index].slice(0, displayed.length + 1));
      }, 100);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(texts[index].slice(0, displayed.length - 1));
      }, 50);
    } else if (!deleting && displayed.length === texts[index].length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <motion.div
      className="text-2xl font-mono font-bold text-center"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {displayed}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
}
