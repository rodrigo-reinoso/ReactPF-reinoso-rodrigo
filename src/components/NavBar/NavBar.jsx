import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import classes from './NavBar.module.css'
import logo from './assets/logo-calavera.jpg'
import { useCart } from '../../context/CartContext'
import Cart from '../CartWidget/CartWidget'
import Button from '../Button/Button'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const { totalQuantity } = useCart()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name', 'desc'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <header className={classes.header}>

            <Link className={classes.link} to='/'>
                <h1 className={classes.titulo}>ONE PIECE</h1>
                <img src={logo} alt="Icono de ONE PIECE" />
            </Link>

            <nav className={classes.navBar}>
                <div className="container">
                    <ul className={classes.ul}>
                        {
                            categories.map(cat => (
                                <li key={cat.id}><Button to={`/category/${cat.slug}`}>{cat.name}</Button></li>
                            ))
                        }
                    </ul>
                </div>

            </nav>
            {totalQuantity > 0 ? <Cart /> : null}
        </header>

    )
}

export default NavBar