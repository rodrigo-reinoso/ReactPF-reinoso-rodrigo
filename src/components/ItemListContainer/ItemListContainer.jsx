import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"
import { useEffect, useState } from "react"
import { useNotification } from '../../Notification/NotificationService'
import { getDocs, collection, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from '../../services/firebase/firebaseConfig'



const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        if (categoryId) document.title = categoryId

        return () => {
            document.title = "ONE PIECE"
        }
    })

    useEffect(() => {
        setLoading(true)

        const productsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])


    if (loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div className="container">
            <h2 className={classes.tituloProductos}>{greeting}</h2>
            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer 