import BlogList from './BlogList'
import FavoritesList from './FavoritesList'
import Preview from './Preview'

function AppLayOut() {
  return (
    <article className="article">
      <h1>blogsInterest</h1>
      <div className="grid-layout">
        <FavoritesList />

        <Preview />
        <BlogList />
      </div>
    </article>
  )
}

export default AppLayOut
