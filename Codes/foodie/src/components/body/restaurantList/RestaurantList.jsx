/* eslint-disable react/prop-types */
import {RestaurantCard, SWHeader} from "../../index";
import { responsiveGrid, fetchNextSetData } from "../../../utils";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const RestaurantList = ({title, data, rawData, csrfToken}) => {
    let restaurants = data?.gridElements?.infoWithStyle?.restaurants;
    
    useBottomScrollListener(() => {
        const nextSetRestaurantData = fetchNextSetData(rawData, csrfToken);
    });



    return(
        <div  className="py-8 border-b border-[#F0F0F5]">
            <SWHeader title={title}/>
            <div className={`restaurant_list ${responsiveGrid}`}>
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