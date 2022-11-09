import { StyledHeader } from "./styles"
import config from '../../../config.json'

export default function Header() {
  return (
    <StyledHeader>
      <div className="banner-holder" role="img" aria-label="Receba" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)" }}>
      </div>
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