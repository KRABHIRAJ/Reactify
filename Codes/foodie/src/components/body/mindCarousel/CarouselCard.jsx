import { baseImageUrl } from "../../../utils/mindCarousel";

const CarouselCard = ({imageData}) => {
  return (
    <img className="md:h-[250px] h-[150px] object-cover" src={baseImageUrl + imageData?.imageId} alt="image" />
  )
}

export default CarouselCard