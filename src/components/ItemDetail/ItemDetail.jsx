import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'

const ItemDetail = ({ id, name, img, description, stock, price }) => {
    const { addItem, getProductQuantity } = useCart()
    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            price,
            quantity,
            img
        }

        addItem(objProduct)
        showNotification('success',` Se agregaron correctamente ${quantity} ${name}`)
    }

    const productQuantity = getProductQuantity(id)

    return (

        <div className={classes.cardDetail}>
            <img src={img} alt={`Imagen de ${name}`} className={classes.imgDetail} />
            <div className={classes.bodyDetail}>
                <h4 className={classes.Title}>{name}</h4>
                <p className='infoDetail'>{description}</p>
                <div>
                    <p><strong>Precio: $ {price}</strong></p>
                    <p>Stock: {stock}</p>
                </div>
                <div className={classes.itemCountDetail}>
                    {
                        <ItemCount initial={productQuantity} stock={stock} onAdd={handleOnAdd} />
                    }
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
