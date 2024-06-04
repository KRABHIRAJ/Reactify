import useGetIdAndTags from "./hooks/useGetIdAndTags";
import useFetchRestaurantData from "./hooks/useFetchRestaurantData";
import { getAPIUrl, getCarouselAPIUrl, logo_url, mind_carousel_base_url, res_card_base_url } from "./constants/api";
import { hideInMobileView, navItemCSS } from "./header";
import useFetchCarouselResList from "./hooks/useFetchCarouselResList";

export {
  useGetIdAndTags,
  useFetchRestaurantData,
  res_card_base_url,
  getAPIUrl,
  logo_url,
  mind_carousel_base_url,
  getCarouselAPIUrl,
  navItemCSS,
  hideInMobileView,
  useFetchCarouselResList,
};
