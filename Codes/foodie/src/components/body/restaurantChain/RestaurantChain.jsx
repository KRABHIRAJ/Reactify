import { RestaurantCard, SWHeader } from "../../index"
const RestaurantChain = ({data}) => {
  const restaurants = data?.gridElements?.infoWithStyle?.restaurants;
  const title = data?.header?.title;
  return (
    <div className="py-8 border-b border-[#F0F0F5]">
      <SWHeader title={title} />
      <div className="restaurants_list flex items-center overflow-scroll">
        {
          restaurants.map((restaurant) => (
            <div className="m-4" key={restaurant?.info?.id}>
              <RestaurantCard restaurant={restaurant?.info} />
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default RestaurantChain