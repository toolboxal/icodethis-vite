/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import data from './data'

const PostsContext = createContext()

function CustomContext({ children }) {
  const [posts, setPosts] = useState(data)
  const [selectedPost, setSelectedPost] = useState(1)

  const bookMarkList = posts.filter((post) => post.bookmark)

  function handlePostClick(post) {
    setSelectedPost(post.id)
  }
  function handleBookMark(post) {
    const updatedPost = { ...post, bookmark: !post.bookmark }
    const updatedArray = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost
      } else {
        return post
      }
    })
    setPosts([...updatedArray])
  }

  const valuesToShare = {
    posts,
    setPosts,
    selectedPost,
    setSelectedPost,
    handlePostClick,
    handleBookMark,
    bookMarkList,
  }
  return (
    <PostsContext.Provider value={valuesToShare}>
      {children}{' '}
    </PostsContext.Provider>
  )
}

function usePostContext() {
  const context = useContext(PostsContext)
  return context
}

export { usePostContext, CustomContext }
