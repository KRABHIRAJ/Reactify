import { useParams } from "react-router-dom"
import {  useFetchCarouselResList } from "../../../utils";
import {RestaurantCard, SkeletonCard} from "../../index";

const CarouselRestaurantList = () => {
  const params = useParams();
  let collectionId = ""
  let tags = ""
  const paramsSplitted = params?.id?.split('&');
  if(paramsSplitted.length > 1){
    collectionId = paramsSplitted[0];
    tags = paramsSplitted[1];
  }
  const response = useFetchCarouselResList(collectionId, tags);
  if(response?.data?.cards?.length > 0){
    const data = response?.data?.cards;
    const headerData = data[0]?.card?.card;
    const resCount = data[1]?.card?.card?.restaurantCount;
    return (
      <div className="py-8 px-4">
          <div className="pb-4">
              <h1 className="font-[700] text-[50px]">{headerData?.title}</h1>
              <p className="text-[24px] text-[#3D4152]">{headerData?.description}</p>
          </div>
          <p className="font-[700] text-[30px] py-4 border-t border-gray-200"> {resCount} restaurants to explore</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-between">
            {

                data.slice(3).map((item) => {
                    const itemInfo = item?.card?.card?.info;
                    if(itemInfo){
                        return (
                            <div className="justify-self-center" key={itemInfo?.id}>
                                <RestaurantCard restaurant={itemInfo} />
                            </div>
                        )
                    }
                })
            }
          </div>
      </div>
    )
}else{
    return(
        <SkeletonCard count={32} />
    )
}
}

export default CarouselRestaurantList