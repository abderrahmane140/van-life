import { useOutletContext } from "react-router-dom"
export default function HostVanInfo() {
  const { detailCard } = useOutletContext()
  return (
      <section className="host-van-detail-info">
        <h4>Name: <span>{detailCard.name}</span></h4>
        <h4>Category: <span>{detailCard.type}</span></h4>
        <h4>Description: <span>{detailCard.description}</span></h4>
        <h4>Visibility: <span>Public</span></h4>
    </section>  
  )
}
