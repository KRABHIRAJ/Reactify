import { mind_carousel_base_url, useGetIdAndTags } from "../../../utils";
import { useNavigate } from "react-router-dom";

const CarouselCard = ({imageData}) => {
  const navigate = useNavigate();

  const { collectionId, tags } = useGetIdAndTags(imageData?.action?.link)
  const getRelatedResList = () => {
      navigate(`/collections/${collectionId}&${tags}`)
  }
  return (
    <img onClick={getRelatedResList} className="md:h-[250px] h-[150px] object-cover cursor-pointer" src={mind_carousel_base_url + imageData?.imageId} alt="image" />
  )
}

export default CarouselCard