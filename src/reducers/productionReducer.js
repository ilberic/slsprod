import mixingImg from '../assets/images/productions/mixing/mixing.png'
import beatsImg from '../assets/images/productions/beats/beats.png'
import designImg from '../assets/images/productions/design/design.png'
import ex1 from '../assets/images/productions/design/exampleImages/3IE7jsjOP9A.jpg'
import ex2 from '../assets/images/productions/design/exampleImages/3vmgo8rjtWo.jpg'
import ex3 from '../assets/images/productions/design/exampleImages/_kg_u8buT14.jpg'
import ex4 from '../assets/images/productions/design/exampleImages/HhfZYsOcHE8.jpg'
import ex5 from '../assets/images/productions/design/exampleImages/lQQ8nvOMMwc.jpg'
import ex6 from '../assets/images/productions/design/exampleImages/whWYG_O5Xs0.jpg'
import ex7 from '../assets/images/productions/design/exampleImages/wNPu5dJ4v-s.jpg'
import ex8 from '../assets/images/productions/design/exampleImages/zgoS28vceWg.jpg'
let initialState = {
    productionLinks: [
        {link: '/production/mixing', img: mixingImg, changed: false},
        {link: '/production/beats', img: beatsImg, changed: false},
        {link: '/production/design', img: designImg, changed: false}
    ],
   productionArtists: {
       mixing: {
           name: 'AKKUTHEGREATEST',
           type: 'СВЕДЕНИЕ',
           optionalInscriptions: 'люблю своё дело cведу трек уникально стильно люблю своё дело cведу трек уникально стильно люблю своё дело cведу трек уникально стильно ',
           inscription: 'ждите полной самоотдачи ждите полной самоотдачи ждите полной самоотдачи ждите полной самоотдачи ждите полной самоотдачи ждите полной самоотдачи '
       },
       beats: {
           name: 'DIASS',
           type: 'БИТЫ',
           optionalInscriptions: 'люблю своё дело сделаю бит уникально стильно',
           inscription: 'мечтаю о лифчиках трёх голых сучек'
       },
       design: {
           name: 'ROYBOYPLUGG',
           type: 'ДИЗАЙН',
           optionalInscriptions: 'люблю своё дело нарисую обложку уникально стильно',
           inscription: 'ждите полной самоотдачи'
       },
   },
    productionSocial: [
        {link: '/production/mixing', vk: '', instagram: ''},
        {link: '/production/beats', vk: '', instagram: ''},
        {link: '/production/design', vk: '', instagram: ''}
    ],
    productionDesignImagesExamples: [
        {src: ex1},
        {src: ex2},
        {src: ex3},
        {src: ex4},
        {src: ex5},
        {src: ex6},
        {src: ex7},
        {src: ex8}
    ],
    APIURLBEATS: 'https://api.vk.com/method/market.get?owner_id=-192725368&album_id=1&access_token=203bf0202b6a9a529d61cd47f078d24b6ee11d275761673b1e0f834ed718eaba4968e9c71baeda58fc6ee&v=5.59',
    APIURLMIXING: 'https://api.vk.com/method/market.get?owner_id=-192725368&album_id=3&access_token=203bf0202b6a9a529d61cd47f078d24b6ee11d275761673b1e0f834ed718eaba4968e9c71baeda58fc6ee&v=5.59',
    APIURLDESIGN: 'https://api.vk.com/method/market.get?owner_id=-192725368&album_id=2&access_token=203bf0202b6a9a529d61cd47f078d24b6ee11d275761673b1e0f834ed718eaba4968e9c71baeda58fc6ee&v=5.59',

    APIARTICLES: {
        response: {
            items: [

            ]
        }
    },
    articlesLoaded: false,
    examplesLoaded: false
}

const productionReducer = (state = initialState, action) => {
    switch (action.type)    {
        case 'PRODUCTION-CHANGE-CLICK':
            state.productionLinks = state.productionLinks.map(item => {
                let newItem = {
                    link: item.link,
                    img: item.img,
                    changed: false
                }
                if (item.link === action.clickedLink)   {
                    newItem.changed = true
                } else {
                    newItem.changed = false
                }
                return newItem
            })
            return state
        case 'GET-ARTICLES':
            state.articlesLoaded = true
            state.APIARTICLES = action.newArticles
            return state
        case "SET-ARTICLES-LOADED":
            state.articlesLoaded = false
            return state
        case "SET-EXAMPLES-LOADED-TRUE":
            state.examplesLoaded = true
            return state
        case "SET-EXAMPLES-LOADED-FALSE":
            state.examplesLoaded = false
            return state
        default:
            return state
    }
}

export const productionChangeClickActionCreator = (link) => ({
    type: 'PRODUCTION-CHANGE-CLICK',
    clickedLink: link
})

export const getAPIArticlesActionCreator = (newArticles) => ({
    type: 'GET-ARTICLES',
    newArticles: newArticles
})

export const setAPIArticlesLoadedActionCreator = () => ({
    type: "SET-ARTICLES-LOADED"
})

export const setExamplesLoadedFalseActionCreator = () => ({
    type: "SET-EXAMPLES-LOADED-FALSE"
})
export const setExamplesLoadedTrueActionCreator = () => ({
    type: "SET-EXAMPLES-LOADED-TRUE"
})

export const getArticles = (itemLink, productionLinks) => dispatch => {
    setTimeout(() => {
        let url
        productionLinks.map(item => {
            if (item.link === itemLink){
                switch (item.link)  {
                    case '/production/mixing':
                        url = 'https://ufa-kitchen.ru/phpArticles/getProductsMixing.php'
                        break
                    case '/production/beats':
                        url = 'https://ufa-kitchen.ru/phpArticles/getProductsBeats.php'
                        break
                    case '/production/design':
                        url = 'https://ufa-kitchen.ru/phpArticles/getProductsDesign.php'
                        break
                }

                    fetch(url, {method: 'post'})
                    .then(res => res.json())
                    .then(
                        (result) => {
                            return result
                        },
                        (error) => {console.log('Ошибка получения товаров:' + error)}
                    )
                    .then((result) => {
                        dispatch(getAPIArticlesActionCreator(result))
                    })
            }
        })
    }, 1000)
}

export default productionReducer