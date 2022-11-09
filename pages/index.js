import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import Timeline from '../src/components/Timeline';
import Favorites from '../src/components/Favorites';

export default function HomePage() {
  // const homePageStyles = {backgroundColor: "red"}

  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
        <Favorites />
      </div>
    </>
  )
}
