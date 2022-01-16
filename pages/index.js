import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Home from './home'
 const index = () => {
  return (
    <>
    <Head>
      <title>Next JS Learner</title>
    </Head>
    <Navbar/>
      <Home/>
    </>
  )
}

export default index
