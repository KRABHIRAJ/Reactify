import { SWHeader } from "../../index"
const RestaurantChain = ({data}) => {
  const restaurants = data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const title = data?.header?.title;
  return (
    <div className="py-8 border-b border-[#F0F0F5]">
      <SWHeader title={title} />
    </div>
  )
}

export default RestaurantChain