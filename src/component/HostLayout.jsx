import {NavLink,Outlet } from "react-router-dom"
function HostLayout() {
  return (
    <>
    <nav className="host-nav">
      <NavLink className={({isActive})=>isActive? "nav-lin": null} end to=".">Dashboard</NavLink>
      <NavLink className={({isActive})=>isActive? "nav-lin": null} to="/host/income">income</NavLink>
      <NavLink className={({isActive})=>isActive? "nav-lin": null} to="/host/vans">vans</NavLink>
      <NavLink className={({isActive})=>isActive? "nav-lin": null} to="/host/reviews">reviews</NavLink>

    </nav>
    <Outlet />
    </>
  )
}

export default HostLayout