import React from "react"
import './menu.sass'
import {NavLink} from "react-router-dom";

const Menu = ({state}) => {

    let menuArr = state.menuItems.map(item => {
        return (
                <NavLink to={`/${item.name}`} className='menu__wrapper-item'>
                    <img src={item.img} alt={`${item.name} menu item `}/>
                </NavLink>
        )
    })

    return (
        <div className="menu__general-wrapper">
            <img src={state.logoSrc} alt="" className='logo'/>
            <div className="menu__wrapper">
                { menuArr }
            </div>
        </div>
    )

}

export default Menu