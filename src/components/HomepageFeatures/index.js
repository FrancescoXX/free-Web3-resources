import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    icon: 'img/icons/rocket.svg',
    items: [
      {url: "docs/introduction", text: "🏎️ Start here"},
      {url: "docs/roadmap/blockchain-roadmaps", text: "🛣️ Web3 Roadmap"}
    ]
  },
  {
    title: 'Beginner',
    icon: 'img/icons/rocket.svg',
    items: [
      {url: "docs/introduction", text: "Beginner"}
    ]
  },
  {
    title: 'Intermediate',
    icon: 'img/icons/rocket.svg',
    items: [
      {url: "docs/introduction", text: "Intermediate"}
    ]
  },
  {
    title: 'Advanced',
    icon: 'img/icons/rocket.svg',
    items: [
      {url: "docs/introduction", text: "Advanced"}
    ]
  },
  
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


function Feature({title, icon, items }) {


  return (
    <article className={clsx('col col--4')}>
      <div className={styles.homecard}>
        <img src={icon} className={styles.homeIcon}></img>
        <h2>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>
      
    </article>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
        <ul className={styles.grid3col}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}
