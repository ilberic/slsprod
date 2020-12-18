import React from "react"
import './additionalItem.sass'

const AdditionalItem = ({name, price, photoSrc}) => {
    return (
        <>
            <div className='article__wrapper-item'>
                <img src={photoSrc} alt=""/>
                <div className={`article__popup`}>
                    <span className='article__popup-name'>{name}</span>
                    <span className='article__popup-price'>{price}</span>
                </div>
            </div>
        </>
    )
}

export default AdditionalItem