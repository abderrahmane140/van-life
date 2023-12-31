import {Link,NavLink} from "react-router-dom"
import '../assets/fontawesome-free-6.4.2-web/css/all.min.css'
function Header() {
  const blinks={
    fontWeight : "bold",
    textDecoration : "underline",
    color: "#161616"
  }
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}
  return (
    <header>
    <Link className="site-logo" to="/">#vanlife</Link>
      <nav>
        <NavLink style={ ({isActive}) => isActive ? blinks : null} to='/host'>Host</NavLink>
        <NavLink style={ ({isActive}) => isActive ? blinks : null} to="/about">About</NavLink>
        <NavLink style={ ({isActive}) => isActive ? blinks : null} to="/vans">Vans</NavLink>
      <Link to="login" className="login-link">
      <i className="fa-solid fa-user"></i>
                </Link>
                <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  )
}

export default Header