import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <a href="/">My Location</a>
      </span>
    </nav>
  )
}

export default Navbar
