import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <span className="hailHome">
          <Link to="/">HAiL</Link>
        </span>
        <div className="dropdown">
          {/* <span>
            <Link to="/">My Location</Link>
          </span> */}
          <button className="dropbtn">
            <Link to="/">My Location</Link>
          </button>
          <div className="dropdown-content">
            <span>
              <Link to="/locations">Locations</Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
