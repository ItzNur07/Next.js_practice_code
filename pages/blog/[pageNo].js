import Navbar from '../../Components/Navbar';

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();


  const paths = data.map((cl) => {
    return{
      params : {
        pageNo : cl.id.toString(),
      }
    }
  })

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  
  return{
    props:{
      data
    }
  }
}

const pageNo = ({data}) => {
  return (
    <>
      <Navbar />
      <h1>Welcome</h1>
      <div className='area'>
        <span className='curr-id'>{data.id}</span>
        <p className='curr-title'>{data.title}</p>
        <p style={{fontWeight:"bold"}}>{data.body}</p>
      </div>
    </>
  )
  }
export default pageNo
