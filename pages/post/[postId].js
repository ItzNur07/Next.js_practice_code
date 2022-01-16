import { useRouter } from "next/router";

const postId = () => {
  const router = useRouter();
  const postId = router.query.postId;
  return (
    <>
      <h1>Welcome to {postId} </h1>
    </>
  )
}

export default postId
