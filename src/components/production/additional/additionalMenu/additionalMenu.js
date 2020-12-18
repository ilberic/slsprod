import React from "react"
import './additionalMenu.sass'
import {
    productionChangeClickActionCreator,
    setAPIArticlesLoadedActionCreator
} from "../../../../reducers/productionReducer"
import AdditionalItem from "./additionalItem/additionalItem"
import {getArticles} from "../../../../reducers/productionReducer";

const AdditionalMenu = ({productionLinks, dispatch, productionSocial}) => {
    let newArr = productionLinks.map( item => {

        const clickingChange = () => {
            dispatch(setAPIArticlesLoadedActionCreator())
            dispatch(productionChangeClickActionCreator(item.link))
            dispatch(getArticles(item.link, productionLinks))
        }
        let chosen
        if (item.changed === true) {
            chosen = 'chosen'
        } else {
            chosen = ''
        }
        return <AdditionalItem productionSocial={productionSocial} chosen={chosen} link={item.link} clickingChange={clickingChange} imgSrc={item.img}/>
    })
    return (
        <div className="additional__wrapper-navigation">
            {newArr}
        </div>
    )
}

export default AdditionalMenu