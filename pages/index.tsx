import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = (props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/service">
        <a>Service</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

