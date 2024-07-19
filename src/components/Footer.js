import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Kateryna Stetsenko</p>
      <p>
        <a
          href="https://github.com/itcreativeusa"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>Phone: 415-231-8910</p>
      <p>Email: kateryna.stetsenko.dev@gmail.com</p>
    </footer>
  );
};

export default Footer;
