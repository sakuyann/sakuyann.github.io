import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = (): JSX.Element => (
  <Layout title="Home | sakuyann pages">
    <h1>
      <a href="https://github.com/sakuyann">sakuyann</a>の技術ブログっぽいなにか
    </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
