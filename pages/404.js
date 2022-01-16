import { useRouter } from "next/router";
import { useEffect } from 'react';

const Error = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    },5000)

    return clearTimeout;
  })



  return(
    <>
    <div className="error">
      <h1 className="e">404</h1>
      <h3 className="not-found">This Page Not Founded</h3>
      <button className="back-home" onClick={() => {router.push('/')}}>Back Home</button>
    </div>
    </>
  )
}
export default Error;