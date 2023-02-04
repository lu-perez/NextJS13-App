const sleep = (sec) => {
  return new Promise(resolve => setTimeout(resolve, sec))
}

const fetchComments = async (id) => {
  await sleep(5000)
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <article>
      <h3>Post {id}</h3>
      <ul>
        {
          comments.map(comment => (
            <li key={comment.id} style={{ border: '1px solid white', listStyle: 'none' }}>
              <h4>{comment.name}</h4>
              <small>{comment.body}</small>
            </li>
          ))
        }
      </ul>
    </article>
  )
}
