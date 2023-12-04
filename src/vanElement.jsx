function VanElement(van) {
  return (
        <div>
            <img src={van.imageUrl} />
            <div >
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i >{van.type}</i>
        </div>
  )
}

export default VanElement