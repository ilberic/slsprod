import React from "react"
import './additionalExamples.sass'
import {setExamplesLoadedFalseActionCreator, setExamplesLoadedTrueActionCreator} from "../../../../reducers/productionReducer";
const AdditionalExamples = ({examplesLoaded, dispatch, productionLinks, productionDesignImagesExamples, articlesLoaded}) => {
    const VK = window.VK;
    let design, newArr
    newArr = '';

    if (articlesLoaded === true && examplesLoaded === false) {
         newArr = productionLinks.map(item => {
            if (item.changed === true){
                switch (item.link)  {
                    case '/production/beats':
                        design = ""
                        return (
                            <>
                                <div id="vk_beats"></div>
                                <script type="text/javascript">
                                    {VK.Widgets.Playlist("vk_beats", 160699688, 2,'87940e120902ce7ddd')}
                                </script>
                            </>
                        )
                    case '/production/mixing':
                        design = ""
                        return (
                            <>
                                <div id="vk_mixing"></div>
                                <script type="text/javascript">
                                    {VK.Widgets.Playlist("vk_mixing", -192725368, 2,'510cb3f02b1f314a3a')}
                                </script>
                            </>
                        )
                    case '/production/design':
                        design = "design"
                        let newArr = productionDesignImagesExamples.map(item => <img src={item.src} alt=""/>)
                        return (
                            <>
                                {newArr}
                            </>
                        )
                    }
                dispatch(setExamplesLoadedTrueActionCreator());
            }
        })

    } else {
        return (
            <>
            </>
        )
    }


    return (
        <>
            <div id={`additional__examples`} className={design}>
                {newArr}
            </div>
        </>
    )
}

export default AdditionalExamples