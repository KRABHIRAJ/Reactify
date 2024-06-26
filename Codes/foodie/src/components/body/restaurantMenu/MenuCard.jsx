import { useState } from "react";
import { addToCartBtnCSS, getLogoUrl } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../store/slices/swiggySlice";

const MenuCard = ({ cardInfo, cardType="InMenu" }) => {
  const [lineClamp, setLineClamp] = useState("line-clamp-2");
  const { id, description, imageId, name, price, defaultPrice, ratings } =
    cardInfo;
  const { rating, ratingCountV2 } = ratings?.aggregatedRating;
  const logo_url = getLogoUrl("w_300", "h_300", imageId);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem);
  const currentItemInCart = (cartItems?.filter((item) => item.id === id));
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(currentItemInCart?.length > 0);



  const addToCart = (type) => {
    if (type === "addBtn") {
      setIsAddBtnClicked(true);
      dispatch(addItemToCart(cardInfo));
    }else if(type === 'increment'){
      dispatch(addItemToCart(cardInfo));
    }else if(type === 'decrement'){
      if(currentItemInCart?.[0].count === 1){
        setIsAddBtnClicked(false);
      }
      dispatch(removeItemFromCart(id))
    }
  };
  return (
    <div className="flex items-center justify-between gap-x-4 my-2 border border-[#08090c26] p-4 m-3 rounded-[20px]">
      <div className="flex flex-col flex-[0.8]">
        <p className="font-[700]">{name}</p>
        <p className="font-[600] text-[14px]">
          ₹ {price / 100 || defaultPrice / 100}
        </p>
        {ratingCountV2 && (
          <div className="flex items-center gap-x-1 py-2 text-[#116649]">
            <i className="fa-solid fa-star"></i>
            <p className="mr-1 font-[700] text-[12px]">
              {`${rating}`}
              <span className="text-[#676A6D]">{` (${ratingCountV2})`}</span>
            </p>
          </div>
        )}
        <div className="flex text-[14px]">
          <p className={lineClamp}>{description}</p>
          {lineClamp === "line-clamp-2" && (
            <span
              onClick={() => setLineClamp("line-clamp-none")}
              className="font-[600] cursor-pointer self-end"
            >
              {cardType==='InMenu' && 'more'}
            </span>
          )}
        </div>
      </div>
      <div className="flex-[0.2] overflow-hidden rounded-lg relative">
        <img className="overflow-hidden rounded-lg" src={logo_url} alt={name} />
        <div className="absolute bottom-1 left-[20%]">
          {isAddBtnClicked ? (
            <div
              className={`${addToCartBtnCSS} flex justify-between items-center`}
            >
              <button
                className="text-[20px]"
                onClick={() => addToCart("decrement")}
              >
                -
              </button>
              {currentItemInCart?.[0]?.count ?? 0}
              <button
                className="text-[20px]"
                onClick={() => addToCart("increment")}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart("addBtn")}
              className={addToCartBtnCSS}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
