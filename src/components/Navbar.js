import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Model from '../Model';
import Cart from '../screens/Cart';
export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  const loadCart = () => {
    setCartView(true)
  }

  const items = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger rounded" >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic pr-3 " to="/">Frizzle Feast</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 pt-4" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5 pt-4" aria-current="page" to="/myOrder">My Orders</Link>
                </li>
                : ""}

            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>
                <Link className="btn bg-white text-danger mx-1" to="/login">Login</Link>

                <Link className="btn bg-white text-danger mx-1" to="/createUser">Sign In</Link>

              </div>
              :
              <div>

                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                  <Badge color="secondary" badgeContent={items.length} >
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>

                {cartView ? <Model onClose={() => setCartView(false)}><Cart></Cart></Model> : ""}

                <button onClick={handleLogout} className="btn bg-white text-success" >Logout</button>
              </div>
            }

          </div>
        </div>
      </nav>
    </div>
  )
}
