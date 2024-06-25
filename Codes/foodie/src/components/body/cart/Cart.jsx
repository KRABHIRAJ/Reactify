import { calculateCartAmount } from "../../../store/slices/swiggySlice";
import { useSelector } from "react-redux";
import { MenuCard } from "../../index";
import { useEffect, useState } from "react";

const Cart = () => {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const cartItems = useSelector((state) => state.cartItem);
  useEffect(() => {
        setTotalCartValue(calculateCartAmount(cartItems));
  }, [cartItems]);
  return (
    <div className="max-w-[900px] m-auto">
      <div className="p-4 font-[600] text-[20px]">
        <p>Total cart value: ₹ {totalCartValue.toFixed(2)}</p>
      </div>
      {cartItems?.map((item) => (
        <div key={item.id}>
          <MenuCard cardInfo={item} cardType="InCart"/>
        </div>
      ))}
    </div>
  );
};

export default Cart;
