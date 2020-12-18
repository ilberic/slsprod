import productionImg from '../assets/images/production.png'
import aboutImg from '../assets/images/about.png'
import reviewsImg from '../assets/images/reviews.png'
import musicImg from '../assets/images/music.png'
import logoImg from '../assets/images/logo.png'

let initialState = {
    menuItems: [
        {name: 'production', img: productionImg},
        {name: 'music', img: musicImg},
        {name: 'reviews', img: reviewsImg},
        {name: 'about', img: aboutImg}
    ],
    logoSrc: logoImg
}

const menuReducer = (state = initialState) => {
        return state
}


export default menuReducer