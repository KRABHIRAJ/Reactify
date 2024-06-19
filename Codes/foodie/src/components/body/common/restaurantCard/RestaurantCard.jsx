import { useNavigate } from "react-router-dom";
import { res_card_base_url } from "../../../../utils/constants/api";
import './RestaurantCard.css';
const RestaurantCard = ({ restaurant }) => {

  const {
    id,
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
  const naviagate = useNavigate();
  const navigateToResMenu = () => {
        naviagate(`restaurants/${id}`)
  }
  
  return <div onClick={navigateToResMenu} className="restaurant_card cursor-pointer w-[180px] sm:w-[200px] lg:w-[200px] xl:w-[300px]">
    <div className="restaurant_card_image relative image-container mt-2">
        <img className="h-[150px] w-[180px] sm:w-[200px] xl:h-[200px] lg:w-[250px] xl:w-[300px] rounded-[16px] object-cover" src={res_card_base_url+cloudinaryImageId} alt={cloudinaryImageId} />
        <div className="absolute bottom-1 left-4 z-10 xl:flex xl:gap-x-3">
            <p className=" text-white font-extrabold text-[24px] ">{header}</p>
            <p className=" lg:text-white lg:text-[24px] text-gray-300 text-[16px] font-extrabold ">{subHeader}</p>
        </div>
    </div>
    <div className="restaurent_card_details px-2 w-full text-nowrap overflow-hidden">
        <h3 className="text-[16px] font-[700] text-[#02060cbf]">{name}</h3>
        <div className="flex items-center gap-x-1">
            <i className="fa-solid fa-star text-[#1F943C]"></i>
            <div className="flex items-center text-[16px] font-[700] text-[#02060cbf] ">
                <p className="mr-1">{`${avgRatingString}  • `}</p>
                <p>{deliveryEstimate}</p>
            </div>
        </div>
        <div className="text-[#888A8C] text-[14px]">
            <p className="text-nowrap text-ellipsis overflow-hidden w-full">{cuisines?.join(', ')}</p>
        </div>
        <div className="text-[#888A8C] text-[14px]">
            <p>{areaName}</p>
        </div>
    </div>
  </div>
};

export default RestaurantCard;
