import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Import the custom CSS file

const App = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="app-title"
        >
          Shristi Dhakal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="app-subtitle"
        >
          Front-end Developer | Creative Coder
        </motion.p>
      </header>

      <main className="app-main">
        {[
          {
            title: "About Me",
            content: "Passionate about creating responsive web designs.",
          },
          {
            title: "Projects",
            content: "Explore my latest work and collaborations.",
          },
          { title: "Skills", content: "React, JavaScript, CSS, and more." },
          {
            title: "Contact",
            content: "Feel free to reach out for opportunities.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="app-card"
          >
            <h2 className="card-title">{card.title}</h2>
            <p className="card-content">{card.content}</p>
          </motion.div>
        ))}
      </main>

      <footer className="app-footer">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default App;
