import Container from '../components/container'
import Intro from '../components/main-page/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import SelfIntro from '../components/main-page/self-intro'

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
