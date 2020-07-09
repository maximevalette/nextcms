import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { withApollo } from '../utils/apollo';
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
        <Head>
          <title>Next CMS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>
            Next CMS
          </h1>

          <p>
            This is your first page.
          </p>
        </main>
    </Layout>
  )
}

export default Home;