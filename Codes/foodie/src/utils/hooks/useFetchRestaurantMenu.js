import { useEffect, useState } from "react";
import { getRestaurantMenuUrl } from "../index";
import axios from "axios";

const useFetchRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    
    const fetchRestaurantMenu = async () => {
        const url = getRestaurantMenuUrl(12.9160035, 77.64267889999999, resId);
        const response = await axios.get(url);
        setRestaurantMenu(response?.data);
    }

    useEffect(() => {
        fetchRestaurantMenu();
    }, [])

    return restaurantMenu;
}

export default useFetchRestaurantMenu;