import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-slider-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1>{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
