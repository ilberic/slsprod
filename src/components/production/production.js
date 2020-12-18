import React from "react";
import './production.sass'
import {NavLink} from "react-router-dom";
import stringRunner from "./stringRunner";
import {productionChangeClickActionCreator} from "../../reducers/productionReducer";
import {getArticles} from "../../reducers/productionReducer";

const Production = ({state, dispatch}) => {
    let newArr = state.map(item => {
        let changingClick = () => {
            dispatch(getArticles(item.link, state))
            dispatch(productionChangeClickActionCreator(item.link));
        }
        return <NavLink to={item.link} onClick={changingClick} className="production__wrapper-item"><img src={item.img} alt=''/></NavLink>
    })
    let string = stringRunner('vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod', 1);
    let bottomString = stringRunner('vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod vk.com/slsprod', 0);

    return (
        <>
            {string}
                <div className='production__wrapper'>
                    {newArr}
                </div>
            {bottomString}
        </>
    )
}

export default Production