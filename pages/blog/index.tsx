import Head from 'next/head';
import Link from 'next/link';
import { Pages } from '../../common/routes';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Dean Phommahaxay</title>
      </Head>
      <div>This is the blog page. Coming Soon!</div>
      <Link href={Pages.HOME}>Back Home</Link>
    </>
  );
};

export default Blog;
