import { useCart } from "../../context/CartContext"
import classes from './CartView.module.css'
import CartItem from "../CartItem/CartItem"
import Button from "../Button/Button"

const CartView = () => {

    const { cart, total, clearCart, totalQuantity } = useCart()

    if (totalQuantity === 0) {
        return (
            <section className="container">
                <h2>No tiene productos en el carrito</h2>
                <Button to={'/'}>volver al inicio</Button>
            </section>
        )
    }

    return (
        <>
            <h2 className={classes.titulo}>Carrito</h2>
            <section className="container">
                <h3 className={classes.subtitulo}>Productos</h3>
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}

                <div className={classes.contenedorOpciones}>
                    <Button onClick={clearCart}>Vaciar Carrito</Button>
                    <Button to={'/checkout'}>checkout</Button>
                    <h3 className={classes.total}>El total de sus Productos es: ${total}</h3>
                </div>

            </section>
        </>
    )
}

export default CartView