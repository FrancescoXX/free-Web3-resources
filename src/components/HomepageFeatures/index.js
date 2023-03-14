import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Start here',
    icon: 'img/icons/onoff.svg',
    items: [
      {url: "/docs/roadmap/introduction", text: "Roadmap"},
    ]
  },
  {
    title: 'Beginner',
    icon: 'img/icons/beginner.svg',
    items: [
      {url: "/docs/blockchains", text: "Blockchains"},
      {url: "/docs/identity", text: "Identity"},
      {url: "/docs/node-providers", text: "Node Providers"},
      {url: "/docs/oracles", text: "Oracles"},
    ]
  },
  {
    title: 'Intermediate',
    icon: 'img/icons/sunglasses2.svg',
    items: [
      {url: "/docs/courses", text: "Courses"},
      {url: "/docs/libraries", text: "Libraries"},
      {url: "/docs/file-storage", text: "File Storage"},
      {url: "/docs/indexing", text: "Indexing"},
      
    ]
  },
  {
    title: 'Advanced',
    icon: 'img/icons/girl-graduated.svg',
    items: [
      {url: "/docs/sdks", text: "SDKs"},
      {url: "/docs/notification", text: "Notifications"},
      {url: "/docs/data-network", text: "Data Network"},
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
