import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className='post-ul'>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/post"><a>Post</a></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
