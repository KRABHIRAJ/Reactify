import {useEffect, useState} from 'react';
import axios from 'axios';
import { getAPIUrl } from '../../utils/appBody';
import './AppBody.css';
import {MindCarousel, RestaurantChain} from '../index';

const AppBody = () => {
    const [appData, setAppData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            try{
                const apiUrl = getAPIUrl(12.9160035, 77.64267889999999);
                const response  = await axios.get(apiUrl);
                setAppData(response?.data?.data?.cards)
            }catch(err){
                console.warn('fetchData Err: ',err)
            }
            
        }
        fetchData();
    },[]);
    console.log('appData >>', appData);
    if(appData.length <= 0) return;
    return(
        <div className='mind_carousel_container max-w-[1350px] m-auto'>
            <div className='mind_carousel_container'>
                <MindCarousel data={appData[0]?.card?.card} />
            </div>
            <div className='restaurant_chain_container'>
                <RestaurantChain data={appData[1]?.card?.card} />
            </div>
        </div>
    )
}

export default AppBody;