import { useEffect, useState } from "react";
import { getAPIUrl } from "../constants/api";
import axios from 'axios';

const useFetchRestaurantData = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const fetchData = async () => {
        try{
            const apiUrl = getAPIUrl(12.9160035, 77.64267889999999);
            const response  = await axios.get(apiUrl);
            setRestaurantData(response?.data)
            console.log('response >>', response);
        }catch(err){
            console.warn('fetchData Err: ',err)
        }
        
    }
    useEffect(() => {
        fetchData();
    }, []);

    return restaurantData;
}

export default useFetchRestaurantData;