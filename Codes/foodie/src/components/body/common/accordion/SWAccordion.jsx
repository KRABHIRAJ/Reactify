import MenuCard from "../../restaurantMenu/MenuCard";

const SWAccordion = ({itemCards}) => {
    return (
        <div>
            {itemCards?.map((item) => {
                const cardInfo = item?.card?.info;

                return(
                    <div key={cardInfo?.id}>
                        <MenuCard cardInfo={cardInfo} />
                    </div>
                )
            })}
        </div>
    )
}

export default SWAccordion;