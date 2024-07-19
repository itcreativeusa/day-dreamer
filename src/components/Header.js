import React, { useEffect } from "react";
import styles from "./Header.module.css";
const Header = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://localhost:8097";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1>Day Planner App</h1>
    </header>
  );
};

export default Header;
