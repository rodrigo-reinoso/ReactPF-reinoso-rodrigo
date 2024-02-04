import classes from './NavBar.module.css'
import logo from './assets/logo-calavera.jpg'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

const NavBar = () => {
    const { totalQuantity } = useCart()
    return (
        <header className={classes.header}>

            <Link className={classes.link} to='/'>
                <h1 className={classes.titulo}>ONE PIECE</h1>
                <img src={logo} alt="Icono de ONE PIECE" />
            </Link>

            <nav className={classes.navBar}>
                <div className="container">
                    <ul className={classes.ul}>
                        <li> <Button to={'./category/figuras'}>Figuras</Button></li>
                        <li> <Button to={'./category/funko'}>Funkos</Button></li>
                        <li> <Button to={'./category/taza'}>Tazas</Button></li>
                    </ul>
                </div>

            </nav>
            {totalQuantity > 0 ? <Cart /> : null}
        </header>

    )
}

export default NavBar