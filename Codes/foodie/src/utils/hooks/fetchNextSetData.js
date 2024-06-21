import axios from "axios";
import { baseUrl } from "../index";

const fetchNextSetData = async (rawData, csrfToken) => {
    try{
        const response  = await axios({
            method: 'post',
            url: `${baseUrl}/dapi/restaurants/list/update`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                filters: {},
                lat: rawData?.cards[11]?.card?.card?.lat,
                lng: rawData?.cards[11]?.card?.card?.lng,
                nextOffset: rawData?.pageOffset?.nextOffset,
                page_type: "DESKTOP_WEB_LISTING",
                seoParams: rawData?.cards[11]?.card?.card?.seoParams,
                widgetOffset: rawData?.pageOffset?.widgetOffset,
                _csrf:csrfToken  
            }
          });
        console.log(response)
    }catch(err){
        console.log('err >>', err)
    }
}

export default fetchNextSetData;