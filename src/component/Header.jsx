import {Link,NavLink} from "react-router-dom"
function Header() {
  const blinks={
    fontWeight : "bold",
    textDecoration : "underline",
    color: "#161616"
  }
  return (
    <header>
    <Link className="site-logo" to="/">#vanlife</Link>
      <nav>
        <NavLink style={ ({isActive}) => isActive ? blinks : null} to='/host'>Host</NavLink>
        <NavLink style={ ({isActive}) => isActive ? blinks : null} to="/about">About</NavLink>
        <NavLink style={ ({isActive}) => isActive ? blinks : null} to="/vans">Vans</NavLink>
      </nav>
    </header>
  )
}

export default Header