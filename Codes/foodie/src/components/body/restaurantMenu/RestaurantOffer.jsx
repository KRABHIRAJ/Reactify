import { SWHeader } from "../../index";
import OfferCard from "./OfferCard";

const RestaurantOffer = ({ resOfferDetails }) => {
  const offers =
    resOfferDetails[0]?.card?.card?.gridElements?.infoWithStyle?.offers;
  return (
    <div className="py-4">
      <SWHeader title="Deals for you" />
      <div className="px-4 py-2 flex items-center gap-x-3 overflow-scroll">
        {offers.map((offer) => {
          return (
            <div className="cursor-pointer" key={offer?.info?.couponCode + offer?.info?.header}>
                <OfferCard offer={offer}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default RestaurantOffer;
