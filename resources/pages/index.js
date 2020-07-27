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
                <link rel="icon" href="/favicon.ico"/>
                <script src="https://i.twic.pics/?v1" async></script>
                <link rel="stylesheet" href="https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.8/dist/shoelace/shoelace.css" />
                <script type="module" src="https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.8/dist/shoelace/shoelace.esm.js"></script>
            </Head>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Query query={BLOCK_QUERY} id="1">
                            {({data: {block}}) => {
                                return (
                                    <>
                                        <h1>
                                            {block.title}
                                        </h1>

                                        <img className="twic" data-src="placeholder:light-blue" width="100%" height="300"/>

                                        <p>
                                            <sl-badge type="success" pill>Success</sl-badge> {block.content}
                                        </p>

                                        <sl-details summary="Toggle Me">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </sl-details>
                                    </>
                                )
                            }}
                        </Query>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;