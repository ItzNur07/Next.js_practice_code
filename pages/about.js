import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>About Our Real State Companey</title>
      </Head>
      <h1>Welcome to About Pages</h1>
      <Image src="/try.jpg" width="500px" height="400px" alt="try now"></Image>
    </>
  )
}

export default About
