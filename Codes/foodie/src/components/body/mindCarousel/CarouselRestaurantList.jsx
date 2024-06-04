import { useParams } from "react-router-dom"
import {  useFetchCarouselResList } from "../../../utils";

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
  console.log('responsedd >>', response);

  return (
    <div>CarouselRestaurantList</div>
  )
}

export default CarouselRestaurantList