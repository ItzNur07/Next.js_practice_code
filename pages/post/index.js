import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>Welcome to post page</h1>

      <ul className="post-ul">
      <li>
        <Link href='/post/post1'><a>Post1</a></Link>
      </li>
      <li>
      <Link href='/post/post2'><a>Post2</a></Link>
      </li>
      <li>
      <Link href='/post/post3'><a>Post3</a></Link>
      </li>
      <li>
      <Link href='/post/post4'><a>Post4</a></Link>
      </li>
      <li>
      <Link href='/post/post5'><a>Post5</a></Link>
      </li>
      </ul>
    </div>
  )
}

export default index
