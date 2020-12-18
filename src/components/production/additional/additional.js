import React from "react";
import './additional.sass'
import stringRunner from "../stringRunner";
import AdditionalMenu from "./additionalMenu/additionalMenu";
import AdditionalInfo from "./additionalInfo/additionalInfo";
import AdditionalExamples from "./additionalExamples/additionalExamples";
import AdditionalCatalog from "./additionalCatalog/additionalCatalog";
const Additional = ({examplesLoaded, state, productionLinks, dispatch, productionSocial, productionDesignImagesExamples, APIArticles, articlesLoaded}) => {
    let string = stringRunner(state.optionalInscriptions, 1);
    let bottomString = stringRunner(state.inscription, 0);
    return (
        <>
            { string }
            <AdditionalCatalog productionLinks={productionLinks} dispatch={dispatch} articlesLoaded={articlesLoaded} APIArticles={APIArticles}/>
            <AdditionalExamples examplesLoaded={examplesLoaded} dispatch={dispatch} articlesLoaded={articlesLoaded}  productionDesignImagesExamples={productionDesignImagesExamples} productionLinks={productionLinks}/>
            <div className="additional__wrapper">
                <AdditionalInfo state={state}/>
                <AdditionalMenu productionSocial={productionSocial} dispatch={dispatch} productionLinks={productionLinks}/>
            </div>
            { bottomString }
        </>
    )
}

export default Additional