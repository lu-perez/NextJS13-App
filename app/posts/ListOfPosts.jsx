import Link from 'next/link'
import { LikeButton } from './LikeButton'

// getStaticProps
// const fetchPosts = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
// }

// getServerSideProps
// const fetchPosts = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())
// }

// Incremental static regeneration
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
    .catch(err => {
      return err
    })
}

// Server-side component
export async function ListOfPosts () {
  const posts = await fetchPosts()
  return (
    <>
      <h2>Posts</h2>
      {
        posts.slice(0, 5).map(post => (
          <article key={post.id} style={{ padding: '8px' }}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <LikeButton id={post.id} />
            </Link>
          </article>
        ))
      }
    </>
  )
}
