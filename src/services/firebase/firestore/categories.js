// categories.js

import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Exporta la función de consulta de la colección
export const getCategories = async () => {
    const categoriesCollection = collection(db, 'categories');
    try {
        const querySnapshot = await getDocs(categoriesCollection);
        const categoriesAdapted = querySnapshot.docs.map(doc => {
            const fields = doc.data();
            return { id: doc.id, ...fields };
        });
        return categoriesAdapted;
    } catch (error) {
        return error;
    }
};
