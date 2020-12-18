import React from "react"
import './additionalInfo.sass'

const AdditionalInfo = ({state}) => {
    return (
        <div className="additional__info-wrapper">
            <span className="additional__info-wrapper_name">
                {state.name}
            </span>
            <span className="additional__info-wrapper_type">
                {state.type}
            </span>
            <a href="https://vk.com/slsprod" target="_blank" rel="noopener noreferrer" className="additional__info-wrapper_btn">Написать продавцу</a>
        </div>
    )
}

export default AdditionalInfo