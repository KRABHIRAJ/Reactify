import { res_card_base_url } from "../../../../utils/constants/api";
import './RestaurantCard.css';
const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant);
  

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    sla,
    areaName,
    cuisines,
    aggregatedDiscountInfoV3,
  } = restaurant;
  const deliveryEstimate = sla?.slaString;
  const header = aggregatedDiscountInfoV3?.header || '';
  const subHeader = aggregatedDiscountInfoV3?.subHeader || '';

  return <div className="restaurant_card cursor-pointer hover:transform w-[190px] md:w-[400px]">
    <div className="restaurant_card_image relative image-container mt-2">
        <img className="h-[240px] w-[190px] md:h-[250px] md:w-[400px] rounded-[16px] object-cover" src={res_card_base_url+cloudinaryImageId} alt={cloudinaryImageId} />
        <div className="absolute bottom-1 left-4 z-10 md:flex md:gap-x-3">
            <p className=" text-white font-extrabold text-[24px] ">{header}</p>
            <p className=" md:text-white text-gray-300 text-[16px] font-extrabold md:text-[24px]  ">{subHeader}</p>
        </div>
    </div>
    <div className="restaurent_card_details px-2 w-full text-nowrap overflow-hidden">
        <h3 className="text-[20px] font-[700] text-[#02060cbf]">{name}</h3>
        <div className="flex items-center gap-x-1">
            <i className="fa-solid fa-star text-[#1F943C]"></i>
            <div className="flex items-center text-[20px] font-[700] text-[#02060cbf] ">
                <p className="mr-1">{`${avgRatingString}  • `}</p>
                <p>{deliveryEstimate}</p>
            </div>
        </div>
        <div className="text-[#888A8C] text-[20px]">
            <p className="text-nowrap text-ellipsis overflow-hidden w-full">{cuisines?.join(', ')}</p>
        </div>
        <div className="text-[#888A8C] text-[20px]">
            <p>{areaName}</p>
        </div>
    </div>
  </div>
};

export default RestaurantCard;
