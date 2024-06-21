import { calculateCartAmount } from "../../../store/slices/swiggySlice";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItem);
    const totalCartValue = calculateCartAmount(cartItems);
    console.log('totalCartValue >>', totalCartValue);
    return(
        <div>
            {totalCartValue}
        </div>
    )
}

export default Cart;