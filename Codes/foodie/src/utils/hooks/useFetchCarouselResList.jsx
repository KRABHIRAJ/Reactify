import { useEffect, useState } from "react";
import { getCarouselAPIUrl } from "../index";
import axios from "axios";



  const useFetchCarouselResList = (collectionId, tags) => {
    const [restaurantData, setRestaurantData] = useState([]);

    const fetchCarouselResList = async (collectionId, tags) => {
        if(collectionId && tags){
            const carousel_url = getCarouselAPIUrl(12.9160035,77.64267889999999,collectionId, tags);
            const response = await axios.get(carousel_url);
            setRestaurantData(response.data);
        }
      }
    
      useEffect(() => {
        fetchCarouselResList(collectionId, tags)
      }, [])

    return restaurantData;

  }

  export default useFetchCarouselResList;