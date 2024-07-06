import React, { useRef, useEffect } from 'react';
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
      {url: "/docs/cross-chain", text: "Cross-Chain"},
    ]
  },
  
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


const Feature = React.forwardRef(({ title, icon, items }, ref) => {
  return (
    <section className={clsx('col col--4')}>
      <div className={styles.homecard}>
        <img src={icon} className={styles.homeIcon} alt={title} />
        <h2>{title}</h2>
        <div ref={ref} className={styles.listContainer}>
          <ul>
            {items.map((props) => (
              <FeatureItem key={props.url} {...props} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default function HomepageFeatures() {
  const featureRefs = useRef([]);

  useEffect(() => {
    let tallestHeight = 0;

    featureRefs.current.forEach(ref => {
      if (ref && ref.offsetHeight > tallestHeight) {
        tallestHeight = ref.offsetHeight;
      }
    });

    featureRefs.current.forEach(ref => {
      if (ref) {
        ref.style.height = `${tallestHeight}px`;
      }
    });
  }, []);

  return (
    <section className={styles.features}>
      <ul className={styles.grid3col}>
        {FeatureList.map((props, idx) => (
          <Feature 
            key={props.title} 
            ref={el => featureRefs.current[idx] = el} 
            {...props} 
          />
        ))}
      </ul>
    </section>
  );
}