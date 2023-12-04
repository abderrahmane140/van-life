import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const VanDetail = () => {
    const params=useParams()
    const [card,setCard]=useState(null)
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`).then(res =>res.json()).then(data=>setCard(data.vans))
    },[params.id])

    return (
        <div className="van-detail-container">
                    {card ? (
                        <div className="van-detail">
                            <img src={card.imageUrl} />
                            <i className={`van-type ${card.type} selected`}>{card.type}</i>
                            <h2>{card.name}</h2>
                            <p className="van-price"><span>${card.price}</span>/day</p>
                            <p>{card.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>
                    ) : <h2>Loading...</h2>}
                </div>
    )
}

export default VanDetail