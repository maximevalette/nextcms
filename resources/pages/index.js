import Head from 'next/head'
import React from 'react';
import BLOCK_QUERY from "../apollo/queries/block/block";
import Layout from '../components/layout'
import Query from '../components/query'

const Home = () => {
  return (
    <Layout>
        <Head>
          <title>Next CMS</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://i.twic.pics/?v1" async></script>
        </Head>
        
        <Query query={BLOCK_QUERY} id="1">
        {({ data: { block } }) => {
            return (
              <main>
                <h1>
                  {block.title}
                </h1>

                <img class="twic" data-src="placeholder:light-blue" width="790" height="300" />
  
                <p>
                  {block.content}
                </p>
              </main>
            )
          }}
        </Query>
    </Layout>
  )
}

export default Home;