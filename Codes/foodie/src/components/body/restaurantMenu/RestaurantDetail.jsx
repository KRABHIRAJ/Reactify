import { getIconUrl } from "../../../utils";

const RestaurantDetail = ({ resDetails }) => {
  const {
    avgRatingString,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
    feeDetails,
  } = resDetails;
  const { icon, message } = feeDetails;
  const iconUrl = getIconUrl(icon);
  const { lastMileTravelString, slaString } = sla;
  const containerStyle = {
        borderRadius: '20px',
        border: '1px solid rgba(2, 6, 12, 0.15)',
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 8px 16px 0px'
  }
  return (
    <div className="mt-8 mx-4" style={containerStyle}>
      <div className="flex items-center gap-x-1 p-4 pb-0">
        <i className="fa-solid fa-star text-[#1F943C]"></i>
        <div className="flex items-center text-[16px] font-[700] text-[#02060cbf] ">
          <p className="mr-1">{`${avgRatingString}(${totalRatingsString})  • `}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <div className="px-4 text-[14px]">
        <p className="font-bold text-[#f15700]">{cuisines.join(', ')}</p>
      </div>
      <div className="flex items-center gap-x-3 p-4 pt-2 text-[14px]">
        <div className="flex flex-col items-center mt-[4px]">
          <div className="w-[7px] h-[7px] rounded-[50%] bg-[#c4c4c4]" />
          <div className="w-[1px] h-[23px] bg-[#c4c4c4]" />
          <div className="w-[7px] h-[7px] rounded-[50%] bg-[#c4c4c4]" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 mb-[2px]">
            <div className="font-[600]">Outlet</div>
            <div>{areaName}</div>
          </div>
          <div className="font-[600] mt-[4px]">{slaString}</div>
        </div>
      </div>
      <div className="flex items-center border-t border-gray-300 p-4 text-gray-600 text-[14px]">
        <div className="flex items-center gap-x-2 mr-1">
          <img src={iconUrl} alt="icon_url" className="h-[20px]"/>
          <p>{lastMileTravelString}s</p>
        </div>
        <div>|{message?.split("|")[1]}</div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
