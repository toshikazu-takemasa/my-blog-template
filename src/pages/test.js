import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.name}</p>
    </div>
  );
};

export default Test;
Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
