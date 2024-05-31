import { mind_carousel_base_url } from "../../../utils/constants/api"

const CarouselCard = ({imageData}) => {
  return (
    <img className="md:h-[250px] h-[150px] object-cover" src={mind_carousel_base_url + imageData?.imageId} alt="image" />
  )
}

export default CarouselCard