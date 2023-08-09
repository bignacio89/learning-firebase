import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase";


export async function getOrders(setOrders, setIsLoading) {
    const ordersQuery = query(collection(db, "orders"))

    const unsubscribe = onSnapshot(ordersQuery, async (snapshot) => {
        let allOrders = [];
        for (const documentSnapshot of snapshot.docs) {
            const order = documentSnapshot.data();
            allOrders.push({
                ...order,
                id: documentSnapshot.id,
            });
        }
        setOrders(allOrders);
        setIsLoading(false);
    })
    return unsubscribe
}

