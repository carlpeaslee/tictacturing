import React from 'react'
import {Link} from 'react-router'
import MenuItem from 'material-ui/MenuItem'


const MenuLink = (props) => {
  return (
    <Link
      to={props.to}
      style={{
        textDecoration: 'none'
      }}
    >
        <MenuItem
          {...props}
        />
    </Link>
  )
}

export default MenuLink
