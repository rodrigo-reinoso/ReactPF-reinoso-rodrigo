import classes from "./Item.module.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Item = ({ id, img, name, price, stock }) => {
    return (
        <div className={classes.contenedor}>
            <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                    <h5 className={classes.tittleItem}>{name} </h5>
                    <div className={classes.contenedorItemPrecioStock}>
                        <strong><p>Precio: $ {price}</p></strong>
                        <p>Stock: {stock}</p>
                    </div>
                    <Link className={classes.link}><Button to={`/detail/${id}`}>Ver Detalle</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item