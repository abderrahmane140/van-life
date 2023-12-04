import { useOutletContext } from "react-router-dom"
export default function HostVanPhotos() {
  const { detailCard } = useOutletContext()
  return (
    <img src={detailCard.imageUrl} className="host-van-detail-image" />
  )
}