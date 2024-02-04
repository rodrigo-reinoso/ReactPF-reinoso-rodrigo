import { useCart } from "../../context/CartContext"
import classes from './CartView.module.css'
import CartItem from "../CartItem/CartItem"
import Button from "../Button/Button"

const CartView = () => {

    const { cart, total, clearCart } = useCart()

    return (
        <>
            <h1>ONE PIECE</h1>
            <section className="cartViewContenedor">
                <h3>Productos</h3>
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
                <div className="contenedorOpciones">
                    <button onClick={() => clearCart()}>Eliminar</button>
                    <Button to={'/checkout'}>checkout</Button>
                </div>
                <div className="total">
                    <h3>El total de sus Productos es: ${total}</h3>
                </div>
            </section>
        </>
    )
}

export default CartView