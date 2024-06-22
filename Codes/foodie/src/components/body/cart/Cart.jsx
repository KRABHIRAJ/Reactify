import { calculateCartAmount } from "../../../store/slices/swiggySlice";
import { useSelector } from "react-redux";
import { MenuCard } from "../../index";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItem);
  const totalCartValue = calculateCartAmount(cartItems);
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
