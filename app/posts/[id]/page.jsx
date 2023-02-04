export default function Post ({ params }) {
  const { id } = params

  return (
    <h3>Post {id}</h3>
  )
}
