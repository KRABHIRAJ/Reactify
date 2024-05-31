export const res_card_base_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const getAPIUrl = (lat, lng) => {
    return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
}

export const logo_url = "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"

export const mind_carousel_base_url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';