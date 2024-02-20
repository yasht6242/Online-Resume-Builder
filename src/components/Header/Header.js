import React from "react";
import styles from "./Header.module.css";



function Header() {
  return (
    <div className={styles.container}>
     
        <div className={styles.heading}>
          <h2>i<span>Resume</span></h2>
        </div>
            
    </div>
  );
}

export default Header;
