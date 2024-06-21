import { calculateCartAmount } from "../../../store/slices/swiggySlice";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItem);
    const totalCartValue = calculateCartAmount(cartItems);
    return(
        <div>
            {totalCartValue}
        </div>
    )
}

export default Cart;