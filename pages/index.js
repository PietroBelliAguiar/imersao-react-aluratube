import config from '../config.json';
import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import Timeline from '../src/components/Timeline';
import Favorites from '../src/components/Favorites';
import { useState } from 'react';

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState()

  return (
    <>
      <div>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        <Favorites />
      </div>
    </>
  )
}
