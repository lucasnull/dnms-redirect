import React, { useState } from "react";
import Image from "next/image";
import styles from "./generosidade.module.css";
import textos from "./textos.json";

export default function Generosity() {
  const [copied, setCopied] = useState(false);
  const pixKey = "00.456.890/0001-40";

  function copyText() {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);

    setTimeout(function () {
      setCopied(false);
    }, 3000);
  }

  return (
    <div className={styles.container}>
      <div className={styles.screenSize}>
        <Image src="/logo.png" width={162} height={34} alt={textos.logoAltText} />
        <p className={styles.generosity}>{textos.generosityTitle}</p>
        <p className={styles.text}>{textos.text}</p>
        <div className={styles.box}>
          <p>
            {textos.churchName}
            <br />
            {textos.cnpj}
          </p>
          <p className={styles.bold}>BRADESCO</p>
          <p>
            {textos.bradesco.agency}
            <br />
            {textos.bradesco.account}
          </p>
          <p className={styles.bold}>ITAÚ</p>
          <p>
            {textos.itau.agency}
            <br />
            {textos.itau.account}
          </p>
          <p className={styles.bold}>{textos.pix.title}</p>
          <div className={styles.pix}>
            <p>
              {textos.pix.key} {pixKey}
            </p>
            <button className={styles.button} onClick={copyText}>
              <Image src="/paste.png" width={14} height={14} alt={textos.logoAltText} className={styles.copyButton} />
              {textos.copyButton}
            </button>
          </div>
          {copied ? (
            <div className={styles.isCopied}>
              <p>{textos.successMessage}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
