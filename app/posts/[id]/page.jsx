import Link from 'next/link'

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <article>
      <h3>Post {id}</h3>
      <h2>{post.title}</h2>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
    </article>
  )
}
