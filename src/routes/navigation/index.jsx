import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentUser } from '../../store/user/userSelector'
import { selectIsCartOpen } from '../../store/cart/cartSelector'

import { signOutStart } from '../../store/user/userAction'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { CartIcon } from '../../components/cart-icon'
import { CartDropdown } from '../../components/cart-dropdown'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './styles'

export default function Navigation() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const handleSignOut = () => {
    dispatch(signOutStart())
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
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
