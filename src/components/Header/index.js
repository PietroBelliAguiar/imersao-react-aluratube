import { StyledHeader, Banner } from "./styles"
import config from '../../../config.json'

export default function Header() {
  return (
    <StyledHeader>
      <Banner className="banner-holder" role="img" aria-label="Receba" bgImg={config.bg} />
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader >
  )
}