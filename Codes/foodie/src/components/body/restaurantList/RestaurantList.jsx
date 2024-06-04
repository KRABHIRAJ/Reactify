import { useEffect, useState } from "react";
import {RestaurantCard, SWHeader} from "../../index";
import axios from 'axios';

const RestaurantList = ({title, data, rawData, csrfToken}) => {
    const restaurants = data?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight - 1
    ) return;

    axios({
        method: 'post',
        url: 'https://www.swiggy.com/dapi/restaurants/list/update',
        headers: {
            "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
            "Access-Control-Allow-Methods": 'OPTIONS,POST,GET', // this states the allowed methods
            "Content-Type": "application/json" // this shows the expected content type
        },
        data: {
            filters: {},
            lat: rawData?.cards[11]?.card?.card?.lat,
            lng: rawData?.cards[11]?.card?.card?.lng,
            nextOffset: rawData?.pageOffset?.nextOffset,
            page_type: "DESKTOP_WEB_LISTING",
            seoParams: rawData?.cards[11]?.card?.card?.seoParams,
            widgetOffset: rawData?.pageOffset?.widgetOffset,
            _csrf:csrfToken        
        }
      });
  };


    return(
        <div className="py-8 border-b border-[#F0F0F5]">
            <SWHeader title={title}/>
            <div className="restaurant_list flex flex-wrap items-center m-auto justify-between">
                {
                    restaurants?.map((restaurant) => (
                        <div className="m-4" key={restaurant?.info?.id}>
                            <RestaurantCard restaurant={restaurant?.info} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RestaurantList