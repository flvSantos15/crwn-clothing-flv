import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useCart } from '../../contexts/cartContext'
import { selectCurrentUser } from '../../store/user/userSelector'

import { signOutUser } from '../../services/firebase/auth'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { CartIcon } from '../../components/cart-icon'
import { CartDropdown } from '../../components/cart-dropdown'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './styles'

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useCart()

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
