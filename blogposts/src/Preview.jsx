import { Link } from 'react-router-dom'
import { usePostContext } from './CustomContext'
import BookMark from './BookMark'

function Preview() {
  const { selectedPost, posts } = usePostContext()
  const bgStyle = {
    background: ` linear-gradient(rgba(0,0,0,0.65) 20%,rgba(0,0,0,1)), url(${
      posts[selectedPost - 1].image
    }) no-repeat center center / cover`,
  }

  return (
    <div className="preview" style={bgStyle}>
      <div className="contents">
        <h2>{posts[selectedPost - 1].title}</h2>
        <h3>{posts[selectedPost - 1].author}</h3>
        <p>{`${posts[selectedPost - 1].text.substring(0, 500)} ....`}</p>
      </div>
      <div className="preview-bookmark-wrapper">
        <BookMark post={posts[selectedPost - 1]} />
      </div>
      <Link className="article-btn" to={`${posts[selectedPost - 1].id}`}>
        See Full Article
      </Link>
    </div>
  )
}

export default Preview
