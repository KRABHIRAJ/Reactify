import { useParams } from "react-router-dom";
import { useFetchRestaurantMenu } from "../../../utils";
import { MenuLists, RestaurantDetail, RestaurantOffer, SWHeader } from "../../index";

const RestaurantMenu = () => {
  const params = useParams();
  const resId = params.id;
  const restaurantMenu = useFetchRestaurantMenu(resId);
  const title = restaurantMenu?.data?.cards[0]?.card?.card?.text;
  const resDetails = restaurantMenu?.data?.cards[2]?.card?.card?.info;
  const resOfferDetails = restaurantMenu?.data?.cards?.filter((card) =>
    card?.card?.card["@type"]?.includes("GridWidget")
  );
  const allMenuItems =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const menuList = allMenuItems?.filter((item) =>
    item?.card?.card["@type"]?.includes("ItemCategory")
  );
  if (!title && !resDetails && !resOfferDetails && !menuList) return;
  return (
    <div className="max-w-[900px] m-auto pt-10">
      <SWHeader title={title} />
      <RestaurantDetail resDetails={resDetails} />
      {resOfferDetails.length > 0 && (
        <RestaurantOffer resOfferDetails={resOfferDetails} />
      )}
      <p className="text-center p-3 tracking-[4px]">MENU</p>
      <MenuLists menuList={menuList}/>
    </div>
  );
};

export default RestaurantMenu;
