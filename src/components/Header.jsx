import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Header(){
    const cartCtx = useContext(CartContext);

    const userProgressCtx = useContext(UserProgressContext)

    const totalCarItems = cartCtx.items.reduce((totalNumberOfTimes, item)=>{
        return totalNumberOfTimes + item.quantity;
    },0)

    function handleShowCart(){
        userProgressCtx.showCart();
    }


    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}> Cart ({totalCarItems})</Button>
            </nav>
        </header>
    )
}