import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import styles from './styles.module.css';

import { Featured } from '../components/FlashLoans/ExchangeFeature'

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  

  return (
    
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        
        <main>
          <div className={clsx(styles.wrapper)}>
            <ThemeProvider>
              <ThemedGlobalStyle />
              <Featured inView={true} />
            </ThemeProvider>
          </div>
        </main>
      </Layout>
  );
}
