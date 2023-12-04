import { useEffect, useState } from "react"
import { useParams,NavLink,Link, Outlet } from "react-router-dom"
function HostVansDetail() {
  const [detailCard,setDetailCard] =useState(null)
  const params=useParams()
  useEffect(()=>{
    fetch(`/api/host/vans/${params.id}`).then(res=>res.json()).then(data=>setDetailCard(data.vans))
  },[params.id])
  if(!detailCard){
    return <h1>Loading...</h1>
  }
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <section>
      <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
    <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
            <img src={detailCard.imageUrl} />
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${detailCard.type}`}
                >
                    {detailCard.type}
                </i>
                <h3>{detailCard.name}</h3>
                <h4>${detailCard.price}/day</h4>
            </div>
        </div>

      <nav className="host-van-detail-nav">
        <NavLink end style={({isActive})=>isActive? activeStyles :null} to='.'>Details</NavLink>
        <NavLink style={({isActive})=>isActive? activeStyles :null} to='pricing'>Pricing</NavLink>
        <NavLink style={({isActive})=>isActive? activeStyles :null} to='photos'>Photos</NavLink>
      </nav>
      <Outlet context={{detailCard}} />
    </div>
</section>
  )
}

export default HostVansDetail