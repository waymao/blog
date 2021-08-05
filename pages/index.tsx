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
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <SelfIntro/>
        </Container>
      </Layout>
    </>
  )
}
