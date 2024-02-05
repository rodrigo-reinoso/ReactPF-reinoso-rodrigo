import classes from './ItemCount.module.css'
import { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const ItemCount = ({ initial= 1, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }



    return (
        <div className={classes.container}>
            <div className={classes.itemCount}>
                <FaMinus className={classes.button} onClick={decrement} />
                <p>{quantity}</p>
                <FaPlus className={classes.button} onClick={increment} />
            </div>
            <button className={classes.buttonAdd} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
        </div>

    )
}

export default ItemCount
