import './AppBody.css';
import {MindCarousel, RestaurantChain, RestaurantList} from '../index';
import useFetchRestaurantData from '../../utils/hooks/useFetchRestaurantData';
import SkeletonCard from './common/skeletonCard/SkeletonCard';

const AppBody = () => {
    const response = useFetchRestaurantData();
    const rawData = response?.data;
    const appData = rawData?.cards;
    const csrfToken = response?.csrfToken;
    console.log('appData >>', appData);

    if(rawData?.length <= 0 || rawData === undefined){
        return (
            <SkeletonCard count={32} />
       )
    }else{
        return(
            <div className='mind_carousel_container max-w-[1000px] m-auto'>
                <div className='mind_carousel_container'>
                    <MindCarousel data={appData[0]?.card?.card} />
                </div>
                <div className='restaurant_chain_container'>
                    <RestaurantChain data={appData[1]?.card?.card} />
                </div>
                <div className='restaurant_list_container'>
                    <RestaurantList title={appData[2]?.card?.card?.title} data={appData[4]?.card?.card} rawData={rawData} csrfToken={csrfToken}/>
                </div>
            </div>
        )
    }
}

export default AppBody;