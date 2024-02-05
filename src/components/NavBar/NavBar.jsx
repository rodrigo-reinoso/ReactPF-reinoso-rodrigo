import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { collection, getDocs, query, orderBy } from '../../services/firebase/firestore/categories'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name', 'desc'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
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
                        <li>
                        { categories.map(cat => (<Link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>))}
                        </li>
                        
                    </ul>
                </div>

            </nav>
            {totalQuantity > 0 ? <Cart /> : null}
        </header>

    )
}

export default NavBar