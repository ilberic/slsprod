import React from "react"
import './additionalItemSocial.sass'

const AdditionalItemSocial = ({chosen, link, productionSocial, instagramImg, vkImg}) => {

    let newArr = productionSocial.map(item => {
        if (item.link === link && chosen)   {
            return (
                <div className='additional__social-wrapper'>
                    <a href={item.vk} target='_blank' rel='noopener noreferrer'>
                        <img src={vkImg} alt=""/>
                    </a>
                    <a href={item.instagram} target='_blank' rel='noopener noreferrer'>
                        <img src={instagramImg} alt=""/>
                    </a>
                </div>
            )
        }

    })
    return (
        <>
            {newArr}
        </>
    )
}

export default AdditionalItemSocial