import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../Components/Navbar';
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return{
    props:{
      data
    }
  }
}
const Blog = ({data}) => {

  return (
    <div>
      <Head>
        <title>Our Latest Blog</title>
      </Head>
      <Navbar />
      <h1 className="blog-heading">Welcome to blog pages</h1>
      {data.slice(0, 5).map((currEle) => <div className="curr-data" key={currEle.id}>
        <Link href={`/blog/${currEle.id}`}><div className="area">
        <span className="curr-id">{currEle.id}</span>
        <p className="curr-title">{currEle.title}</p>
        </div>
        </Link>
      </div>)}
    </div>
  )
}

export default Blog
