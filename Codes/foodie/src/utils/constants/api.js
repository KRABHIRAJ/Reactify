export const res_card_base_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const getAPIUrl = (lat, lng) => {
    return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
}

export const logo_url = "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"

export const mind_carousel_base_url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';

export const offer_logo_url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/'

export const getLogoUrl = (width, height, logo) => {
    return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,${width},${height}/${logo}`
}

export const getCarouselAPIUrl = (lat, lng, collId, tags) => {
    return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${collId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
}

export const getRestaurantMenuUrl = (lat, lng, restaurantId) => {
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
}

export const getIconUrl = (id) => {
    return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${id}`
}
