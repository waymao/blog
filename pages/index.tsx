import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getIntro } from '../lib/get_intro'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PostBody from '../components/post-body'
import SelfIntro from '../components/self-intro'

export default function Index({ content }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <Container>
          <Intro />
          <SelfIntro/>
        </Container>
      </Layout>
    </>
  )
}
