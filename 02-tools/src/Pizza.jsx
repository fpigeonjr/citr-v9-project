const Pizza = ({name, description, image}) => (
  <div className="pizza">
    <h1>{name}</h1>
    <p>{description}</p>
    <img src={image} alt={name} />
  </div>
)

export default Pizza;