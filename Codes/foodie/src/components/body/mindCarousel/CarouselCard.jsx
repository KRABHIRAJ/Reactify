import axios from "axios";
import { getCarouselAPIUrl, mind_carousel_base_url, useGetIdAndTags } from "../../../utils";
import { useDispatch } from "react-redux";
import { setCarouselResList } from "../../../store/slices/swiggySlice";

const CarouselCard = ({imageData}) => {
  console.log('carousel data >>', imageData);
  const dispatch = useDispatch();

  const { collectionId, tags } = useGetIdAndTags(imageData?.action?.link)
  const getRelatedResList = async () => {
      const carousel_url = getCarouselAPIUrl(12.9160035,77.64267889999999,collectionId, tags);
      const response = await axios.get(carousel_url);
      dispatch(setCarouselResList(response?.data))
  }
  return (
    <img onClick={getRelatedResList} className="md:h-[250px] h-[150px] object-cover cursor-pointer" src={mind_carousel_base_url + imageData?.imageId} alt="image" />
  )
}

export default CarouselCard