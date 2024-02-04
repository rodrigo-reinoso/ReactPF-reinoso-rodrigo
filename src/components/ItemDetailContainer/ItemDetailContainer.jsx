import classes from "./ItemDetailContainer.module.css";
import { useState, useEffect } from "react"
import { getProductById } from '../../services/firebase/firestore/product'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useNotification } from "../../Notification/NotificationService";
import { db } from "../../services/firebase/firebaseConfig";
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [loading, setLoadign] = useState(true)
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    const { showNotification } = useNotification()


    useEffect(() => {
        setLoadign(true)

        const productDocument = doc(db, 'products', id)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoadign(false)
            })
    }, [id])


    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className='ItemDetailcontainer'>
            <h2>Detalle</h2>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer