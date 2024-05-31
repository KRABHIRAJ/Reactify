import {SWHeader, CarouselCard} from "../../index"

const MindCarousel = ({ data }) => {
  const title = data?.header?.title;
  const imageList = data?.imageGridCards?.info;
  
  return (
    <div className="py-8 border-b border-[#F0F0F5]">
      <SWHeader title={title} />
      <div className="flex items-center gap-x-3 overflow-scroll">
        {
          imageList.map((currImg) => (
            <CarouselCard key={currImg.imageId} imageData={currImg} />
          ))
        }
      </div>
    </div>
  )
}

export default MindCarousel