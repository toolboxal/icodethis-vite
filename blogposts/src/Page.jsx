import { usePostContext } from './CustomContext'
import { useNavigate } from 'react-router-dom'

function Page() {
  const { posts, selectedPost } = usePostContext()
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="page-img-container">
        <img
          src={posts[selectedPost - 1].image}
          alt={posts[selectedPost - 1].title}
        />
      </div>
      <h2>{posts[selectedPost - 1].title}</h2>
      <h3>{posts[selectedPost - 1].author}</h3>
      <p>{posts[selectedPost - 1].text}</p>
      <button onClick={() => navigate(-1)}>&larr;</button>
    </div>
  )
}

export default Page
