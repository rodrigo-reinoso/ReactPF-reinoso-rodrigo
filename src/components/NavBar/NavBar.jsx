import classes from './NavBar.module.css'
import logo from './assets/logo-calavera.jpg'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

const NavBar = () => {
    const [show, setShow] = useState(false);
    const {totalQuantity}= useCart()
    return (
        <header className={classes.header}>
            <nav className={classes.navBar}>
                <Link className={classes.link} to='./'>
                    <div className={classes.alineacion}>
                        <h1 className={classes.titulo}>ONE PIECE</h1>
                        <img src={logo} alt="Icono de ONE PIECE" />
                    </div>
                </Link>
                <div className="container">
                    <ul className={classes.ul}>
                        <li> <Button to={'./category/figuras'}>Figuras</Button></li>
                        <li> <Button to={'./category/funko'}>Funkos</Button></li>
                        <li> <Button to={'./category/taza'}>Tazas</Button></li>
                    </ul>
                </div>

                {totalQuantity > 0 ? <Cart/> : null}
            </nav>


        </header>

    )
}

export default NavBar