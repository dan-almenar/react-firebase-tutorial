import { app } from './getFirebase';
import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react';

const db = getFirestore(app)

// Recibir datos una sola vez
const useGetDocs = () => {
    const [data, setData] = useState({
        loading: false,
        error: null,
        data: null
    });

    useEffect(() => {
        setData({...data, loading: true})
        const testCollection = collection(db, 'peliculas')
        let fetchedData = []
        getDocs(testCollection)
        .then((docs) => {
            docs.forEach((doc) => {
                fetchedData.push(doc.data())
                setData({...data, data: fetchedData})
            })
        })
        .catch((err) => {
            setData({...data, error: err})
        })
    }, [])

    // const getData = async () => {
    //     setData({ ...data, loading: true })
    //     let fetchedData = []
    //     try {
    //         const testCollection = collection(db, 'peliculas')
    //         const docs = await getDocs(testCollection);
    //         docs.forEach(doc => {
    //             fetchedData.push(doc.data())
    //         })
    //         setData({...data, data: fetchedData})
    //     } catch (err) {
    //         setData({...data, error: err,
    //         })
    //     }
    // }
    
    // return {data, getData};
    return data
}

// Detectar actualizaciones en tiempo real
const useOnSnapshot = () => {
    const [data, setData] = useState({
        data: null,
        error: null,
        loading: false
    })
    const col = collection(db, 'peliculas')
    useEffect(() => {
        let fetchedData = []
        setData({...data, loading: true})
        onSnapshot(col, (snapshot) => {
            if (snapshot.empty) {
                setData({
                    data: null,
                    error: {code: '204', message: 'No Content'},
                    loading: false
                })
            } else {
                fetchedData = snapshot.docs.map((doc) => doc.data())
                setData({
                    data: fetchedData,
                    error: null,
                    loading: false
                })            
            }
        })
    }, [])
    return data
}

export { useGetDocs, useOnSnapshot }