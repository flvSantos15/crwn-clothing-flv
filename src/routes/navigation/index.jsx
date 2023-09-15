import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { useUser } from '../../contexts/userContext'
import { useCart } from '../../contexts/cartContext'

import { signOutUser } from '../../services/firebase/auth'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { CartIcon } from '../../components/cart-icon'
import { CartDropdown } from '../../components/cart-dropdown'

import './styles.scss'

export default function Navigation() {
  const { currentUser } = useUser()
  const { isCartOpen } = useCart()

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* <Link className="nav-link" to="/contact">
            CONTACT
          </Link> */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}
