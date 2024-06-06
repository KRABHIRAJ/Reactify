import { useParams } from "react-router-dom";
import { useFetchRestaurantMenu } from "../../../utils"
import {RestaurantDetail, SWHeader} from "../../index";

const RestaurantMenu = () => {
  const params = useParams();
  const resId = params.id;
  const restaurantMenu = useFetchRestaurantMenu(resId);
  const title = restaurantMenu?.data?.cards[0]?.card?.card?.text;
  const resDetails = restaurantMenu?.data?.cards[2]?.card?.card?.info;
  console.log('restaurantMenu >>', restaurantMenu);
  if(!title && !resDetails) return;
  return (
    <div className="max-w-[900px] m-auto pt-10">
        <SWHeader title={title}/>
        <RestaurantDetail resDetails={resDetails}/>
    </div>
  )
}

export default RestaurantMenu