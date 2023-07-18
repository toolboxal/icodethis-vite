/* eslint-disable react/prop-types */
import { usePostContext } from './CustomContext'

import BookMark from './BookMark'

function BlogList() {
  const { posts } = usePostContext()
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <SingleBlog post={post} key={post.id} />
      ))}
    </div>
  )
}

function SingleBlog({ post }) {
  const { handlePostClick } = usePostContext()
  function handleClick() {
    handlePostClick(post)
  }
  return (
    <div className="single-blog" onClick={handleClick}>
      <div className="img-container">
        <img className="img" src={post.image} alt={post.title} />
      </div>
      <div className="blog-content">
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
      </div>
      <BookMark post={post} key={post.id} />
    </div>
  )
}

export default BlogList
