/* eslint-disable react/prop-types */
import { usePostContext } from './CustomContext'
import { BsBookmarkFill } from 'react-icons/bs'

function BookMark({ post }) {
  const { handleBookMark } = usePostContext()
  function handleClick() {
    handleBookMark(post)
  }
  const bookMarkStyle = {
    color: post.bookmark ? '#ff7faa' : '#e6e7ec',
    stroke: 'red',
  }

  return (
    <BsBookmarkFill
      className="bookmark-icon"
      onClick={handleClick}
      style={bookMarkStyle}
    />
  )
}
export default BookMark
