import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'
import classes from './CartItem.module.css'
import React from 'react';
import { FaTrash } from "react-icons/fa";

const CartItem = ({ img, name, price, quantity, id }) => {
    const { removeItem } = useCart();
    const { showNotification } = useNotification()

    const deleteItem = () => {
        showNotification('success', 'Se elimina producto correctamente')
        removeItem(id);

    };

    return (
        <div className={classes.cartItemContenedor}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <h4>{name}</h4>
            <p>Precio Unitario: ${price}</p>
            <p>Cantidad: ${quantity}</p>
            <p>Subtotal: $ {price * quantity}</p>
            <button onClick={deleteItem} className={classes.iconoEliminar}>
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItem;
