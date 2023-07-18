/* eslint-disable react/prop-types */
import { usePostContext } from './CustomContext'

function FavoritesList() {
  const { bookMarkList } = usePostContext()
  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      <div className="favorites-list">
        {bookMarkList.map((item) => (
          <Favorite item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

function Favorite({ item }) {
  return (
    <div className="favorite">
      <h2>{item.title}</h2>
      <h3>{item.author}</h3>
    </div>
  )
}
export default FavoritesList
