import { useOutletContext } from "react-router-dom"
export default function HostVanPricing() {
  const { detailCard } = useOutletContext()
  return (
    <h3 className="host-van-price">${detailCard.price}<span>/day</span></h3>
  )
}