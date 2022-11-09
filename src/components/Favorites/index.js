import { StyledFavorites } from "./styles";
import config from "../../../config.json"

export default function Favorites() {
  const favorites = config.favorites
  return (
    <StyledFavorites>
      <section className="favoritos">
        <h2>Favoritos</h2>
        <div className="items-container">
          {favorites.map((profile) => {
            return (
              <a key={profile.username} href={`https://youtube.com/c/${profile.username}"`} target="_blank">
                <img src={profile.photo} />
                <span>@{profile.username}</span>
              </a>
            )
          })}
        </div>
      </section>
    </StyledFavorites>
  )
}
