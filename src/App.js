import React from 'react';
import './bootstrap-grid.min.css'
import './App.sass';
import {Route, HashRouter} from "react-router-dom";
import Menu from "./components/menu/menu";
import Production from "./components/production/production";
import Additional from "./components/production/additional/additional";

const App = ({store, dispatch}) => {
    window.store = store
    return (
        <HashRouter>
            <div className="container">
                <Route path="/" exact render={() => <Menu state={store.menuReducer}/>}/>
                <Route path="/production" exact render={() => <Production dispatch={dispatch} state={store.productionReducer.productionLinks}/>}/>
            </div>
            <Route path="/production/mixing" exact render={() => <Additional examplesLoaded={store.productionReducer.examplesLoaded} articlesLoaded={store.productionReducer.articlesLoaded} APIArticles={store.productionReducer.APIARTICLES} productionSocial={store.productionReducer.productionSocial} dispatch={dispatch} productionLinks={store.productionReducer.productionLinks}  state={store.productionReducer.productionArtists.mixing}/>}/>
            <Route path="/production/beats" exact render={() => <Additional examplesLoaded={store.productionReducer.examplesLoaded} articlesLoaded={store.productionReducer.articlesLoaded} APIArticles={store.productionReducer.APIARTICLES} productionSocial={store.productionReducer.productionSocial} dispatch={dispatch} productionLinks={store.productionReducer.productionLinks} state={store.productionReducer.productionArtists.beats}/>}/>
            <Route path="/production/design" exact render={() => <Additional examplesLoaded={store.productionReducer.examplesLoaded} articlesLoaded={store.productionReducer.articlesLoaded} APIArticles={store.productionReducer.APIARTICLES} productionDesignImagesExamples={store.productionReducer.productionDesignImagesExamples} productionSocial={store.productionReducer.productionSocial} dispatch={dispatch} productionLinks={store.productionReducer.productionLinks} state={store.productionReducer.productionArtists.design}/>}/>
        </HashRouter>
    )
}

export default App
