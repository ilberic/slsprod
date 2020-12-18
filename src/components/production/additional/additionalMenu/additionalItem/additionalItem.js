import React from "react"
import './additionalItem.sass'
import {NavLink} from "react-router-dom";
import vkImg from '../../../../../assets/images/productions/social/vk.svg'
import instagramImg from '../../../../../assets/images/productions/social/instagram.svg'
import AdditionalItemSocial from "./additionalItemSocial/additionalItemSocial";

const AdditionalItem = ({link, clickingChange, imgSrc, chosen, productionSocial, }) => {
    return (
        <div className='additional__item'>
            <AdditionalItemSocial chosen={chosen} link={link} vkImg={vkImg} instagramImg={instagramImg} productionSocial={productionSocial}/>
            <NavLink to={link} onClick={clickingChange} className={`additional__wrapper-navigation_item ${chosen}`}><img src={imgSrc} alt=""/></NavLink>
        </div>
    )
}

export default AdditionalItem